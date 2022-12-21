import { Bytes, ipfs, json } from '@graphprotocol/graph-ts';
import {
    UserCreated,
    FontProjectCreated,
    FontProjectMinted,
} from '../generated/FontProject/FontProject';
import { User, Link, FontProject } from '../generated/schema';

import {
  FontMetadata as FontMetadataTemplate
  } from '../generated/templates'

export function handleUserCreated(event: UserCreated): void {
    /*
    event UserCreated(
      address walletAddress,
      string profileInfoCID,
      uint256 createdAt,
      uint256 updatedAt,
      string lensHandle
    );
    */
    let newUserCreated = User.load(event.params.walletAddress.toHex());
    if (newUserCreated === null) {
        newUserCreated = new User(event.params.walletAddress.toHex());
        newUserCreated.walletAddress = event.params.walletAddress;
        newUserCreated.profileInfoCID = event.params.profileInfoCID;
        let metadata = ipfs.cat(`${event.params.profileInfoCID}/data.json`);
        if (metadata) {
            let value = json.fromBytes(metadata).toObject();
            if (value) {
                const name = value.get('name');
                if (name) {
                    newUserCreated.name = name.toString();
                }
                const bio = value.get('bio');
                if (bio) {
                    newUserCreated.bio = bio.toString();
                }
                /*
                // Couldn't find how to get links
                const links = value.get('links');
                if (links) {
                    const linksArr = links.toArray();
                    if (linksArr) {
                        newUserCreated.links?.push(linksArr.toString());
                    }
                }
                */
            }
        }
        newUserCreated.createdAt = event.params.createdAt;
        newUserCreated.updatedAt = event.params.updatedAt;
        newUserCreated.lensHandle = event.params.lensHandle;
    }
    newUserCreated.save();
}

export function handleFontProjectCreated(event: FontProjectCreated): void {
    /*
    event NewFontProjectCreated(
      bytes32 fontId,
      string metaDataCID,
      address creatorAddress,
      uint256 mintPrice,
      uint256 createdAt,
      uint256 startDateTime
    );
    */
    let newFontProjectCreated = FontProject.load(event.params.id.toHex());

    if (newFontProjectCreated === null) {
        newFontProjectCreated = new FontProject(event.params.id.toHex());
        newFontProjectCreated.creatorAddress = event.params.creatorAddress;
        newFontProjectCreated.perCharacterMintPrice = event.params.perCharacterMintPrice;
        
        // IPFS related data
        newFontProjectCreated.metaDataCID = event.params.metaDataCID;
        const metadataIpfsHash = `${event.params.metaDataCID}/data.json`;
        newFontProjectCreated.metaDataURI = metadataIpfsHash;

        FontMetadataTemplate.create(metadataIpfsHash);

        newFontProjectCreated.launchDateTime = event.params.launchDateTime;
        newFontProjectCreated.createdAt = event.params.createdAt;
    }

    newFontProjectCreated.save();
}

export function handleFontProjectMinted(event: FontProjectMinted): void {
    /*
    event FontProjectMinted(
      bytes32 fontId,
      uint256 tokenId
    );
    */
    /* Cannot use load until there's an emit event inside the contract
    let newFontProjectMinted = FontProjectMinted.load(event.params.id.toHex());
    if (newFontProjectMinted === null) {
        newFontProjectMinted = new FontProjectMinted(event.params.id.toHex());
        newFontProjectMinted.tokenId = event.params.tokenId;
        newFontProjectMinted.save();
    }
    */
}
