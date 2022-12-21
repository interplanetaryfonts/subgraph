import { json, Bytes, dataSource } from '@graphprotocol/graph-ts'

import { FontMetadata } from '../generated/schema';

export function handleFontMetadata(content: Bytes): void {
  let fontMetadata = new FontMetadata(dataSource.stringParam());
  const value = json.fromBytes(content).toObject();

  if (value) {
    const name = value.get('name');
    const description = value.get('description');

    if (name) {
      fontMetadata.name = name.toString();
      fontMetadata.description = description.toString();
    }
  }

  fontMetadata.save();
}