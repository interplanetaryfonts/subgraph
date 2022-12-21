import { ipfs, json } from '@graphprotocol/graph-ts';
import {
    UserCreated,
    UserEdited,
    FontProjectCreated,
    FontProjectMinted,
} from '../generated/FontProject/FontProject';
import { User, FontProject } from '../generated/schema';
import { UserMetadata as UserMetadataTemplate } from '../generated/templates';

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
        const cidUri = `https://${event.params.profileInfoCID}.ipfs.w3s.link/data.json`;
        UserMetadataTemplate.create(cidUri);
        newUserCreated.createdAt = event.params.createdAt;
        newUserCreated.updatedAt = event.params.updatedAt;
        newUserCreated.lensHandle = event.params.lensHandle;
    }
    newUserCreated.save();
}

export function handleUserEdited(event: UserEdited): void {
    /*
    event UserEdited (
        address walletAddress,
        string profileInfoCID,
        uint256 createdAt,
        uint256 updatedAt,
        string lensHandle
    );
    */
    let newUserEdited = User.load(event.params.walletAddress.toHex());
    if (newUserEdited === null) {
        newUserEdited = new User(event.params.walletAddress.toHex());
        newUserEdited.walletAddress = event.params.walletAddress;
        newUserEdited.profileInfoCID = event.params.profileInfoCID;
        const cidUri = `https://${event.params.profileInfoCID}.ipfs.w3s.link/data.json`;
        UserMetadataTemplate.create(cidUri);
        newUserEdited.createdAt = event.params.createdAt;
        newUserEdited.updatedAt = event.params.updatedAt;
        newUserEdited.lensHandle = event.params.lensHandle;
    }
    newUserEdited.save();
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
        newFontProjectCreated.perCharacterMintPrice =
            event.params.perCharacterMintPrice;
        newFontProjectCreated.metaDataCID = event.params.metaDataCID;
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
                    newFontProjectCreated.description = description.toString();
                }
            }
        }
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
