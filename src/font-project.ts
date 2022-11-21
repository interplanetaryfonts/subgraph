import { Address, ipfs, json } from '@graphprotocol/graph-ts';
import {
    FontProjectMinted,
    NewFontProjectCreated,
} from '../generated/FontProject/FontProject';
import { Search, User, Link, FontProject } from '../generated/schema';
import { integer } from '@protofire/subgraph-toolkit';

export function handleFontProjectMinted(event: FontProjectMinted): void {
    /*
    event FontProjectMinted(
      bytes32 fontId,
      uint256 tokenId
    );
    */
    let newFontProjectMinted = FontProject.load(event.params.fontId.toHex());
    if (newFontProjectMinted == null) {
        newFontProjectMinted = new FontProject(event.params.fontId.toHex());
        //newFontProjectMinted.tokenId = event.params.tokenId;
        newFontProjectMinted.save();
    }
}
export function handleNewFontProjectCreated(
    event: NewFontProjectCreated
): void {
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
    let newFontProjectCreated = FontProject.load(event.params.fontId.toHex());
    if (newFontProjectCreated == null) {
        newFontProjectCreated = new FontProject(event.params.fontId.toHex());
        newFontProjectCreated.fontFilesCID = event.params.metaDataCID;
        // These two might change with the new structure
        newFontProjectCreated.creator = event.params.creatorAddress;
        newFontProjectCreated.perCharacterMintPrice = event.params.mintPrice;
        newFontProjectCreated.createdAt = event.params.createdAt;
        newFontProjectCreated.launchDateTime = event.params.startDateTime;
    }
    let metadata = ipfs.cat(`${event.params.metaDataCID}/data.json`);
    if (metadata) {
        const value = json.fromBytes(metadata).toObject();
        if (value) {
            const name = value.get('name');
            if (name) {
                newFontProjectCreated.name = name.toString();
            }
            const description = value.get('description');
            if (description) {
                newFontProjectCreated.name = description.toString();
            }
        }
    }
    newFontProjectCreated.save();
}
