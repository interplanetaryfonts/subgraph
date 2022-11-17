import {
  FontProjectMinted as FontProjectMintedEvent,
  NewFontProjectCreated as NewFontProjectCreatedEvent
} from "../generated/FontProject/FontProject"
import { FontProjectMinted, NewFontProjectCreated } from "../generated/schema"

export function handleFontProjectMinted(event: FontProjectMintedEvent): void {
  let entity = new FontProjectMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fontId = event.params.fontId
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewFontProjectCreated(
  event: NewFontProjectCreatedEvent
): void {
  let entity = new NewFontProjectCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fontId = event.params.fontId
  entity.metaDataCID = event.params.metaDataCID
  entity.creatorAddress = event.params.creatorAddress
  entity.mintPrice = event.params.mintPrice
  entity.createdAt = event.params.createdAt
  entity.startDateTime = event.params.startDateTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
