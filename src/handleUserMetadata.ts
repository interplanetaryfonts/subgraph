import { json, Bytes, dataSource } from '@graphprotocol/graph-ts'

import { UserMetadata } from '../generated/schema';

export function handleFontMetadata(content: Bytes): void {
  let userMetadata = new UserMetadata(dataSource.stringParam());
  const value = json.fromBytes(content).toObject();

  if (value) {
    const name = value.get('name');
    const bio = value.get('bio');

    if (name) {
      userMetadata.name = name.toString();
    }

    if (bio) {
      userMetadata.bio = bio.toString();
    }
  }

  userMetadata.save();
}