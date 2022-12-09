import { Address, ipfs, json } from '@graphprotocol/graph-ts';
import {
    UserCreated,
    FontProjectCreated,
    FontProjectMinted,
} from '../generated/FontProjectV2/FontProjectV2';
import { User, Link, FontProject } from '../generated/schema';
import { integer } from '@protofire/subgraph-toolkit';

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
        newFontProjectCreated.fontFilesCID = event.params.metaDataCID;
        // These two might change with the new structure
        newFontProjectCreated.creatorAddress = event.params.creatorAddress;
        newFontProjectCreated.perCharacterMintPrice =
            event.params.perCharacterMintPrice;
        newFontProjectCreated.createdAt = event.params.createdAt;
        newFontProjectCreated.launchDateTime = event.params.launchDateTime;
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
