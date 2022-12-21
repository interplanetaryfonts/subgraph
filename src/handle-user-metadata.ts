import { Bytes, json, dataSource } from '@graphprotocol/graph-ts';
import { UserMetadata, Link } from '../generated/schema';

export function handleUserMetadata(content: Bytes): void {
    const userMetadataID = dataSource.stringParam();
    const userMetadata = new UserMetadata(userMetadataID);

    const value = json.fromBytes(content).toObject();
    if (value) {
        const email = value.get('email');
        if (email) {
            userMetadata.email = email.toString();
        }
        const name = value.get('name');
        if (name) {
            userMetadata.name = name.toString();
        }
        const website = value.get('website');
        if (website) {
            userMetadata.website = website.toString();
        }
        const bio = value.get('bio');
        if (bio) {
            userMetadata.bio = bio.toString();
        }
        const links = value.get('links');
        if (links) {
            links.toArray().forEach(link => {
                const linkObj = link.toObject();
                if (linkObj) {
                    const linkName = linkObj.get('name');
                    const linkUrl = linkObj.get('url');
                    if (linkName && linkUrl) {
                        const linkID = userMetadataID + linkUrl.toString();
                        const newLink = new Link(linkID);
                        // associate Link entity with parent UserMetadata entity
                        newLink.userMetaData = userMetadata.id;
                        newLink.name = linkName.toString();
                        newLink.url = linkUrl.toString();

                        newLink.save();
                    }
                }
            });

        }
        userMetadata.save();
    }
}
