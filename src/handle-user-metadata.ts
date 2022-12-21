import { Bytes, json, dataSource } from '@graphprotocol/graph-ts';
import { UserMetadata, Link } from '../generated/schema';

export function handleUserMetadata(content: Bytes): void {
    let userMetadata = new UserMetadata(dataSource.stringParam());
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
            let linksArray = links.toArray();
            if (linksArray) {
                userMetadata.links = linksArray.map<string>(link => {
                    const linkObj = link.toObject();
                    if (linkObj) {
                        const linkName = linkObj.get('name');
                        const linkUrl = linkObj.get('url');
                        if (linkName && linkUrl) {
                            const newLink = new Link(linkName.toString());
                            newLink.name = linkName.toString();
                            newLink.url = linkUrl.toString();
                            //return newLink;
                            return linkName.toString();
                        }
                    }
                    return '';
                });
            }
        }
        userMetadata.save();
    }
}
