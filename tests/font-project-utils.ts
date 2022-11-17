import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  FontProjectMinted,
  NewFontProjectCreated
} from "../generated/FontProject/FontProject"

export function createFontProjectMintedEvent(
  fontId: Bytes,
  tokenId: BigInt
): FontProjectMinted {
  let fontProjectMintedEvent = changetype<FontProjectMinted>(newMockEvent())

  fontProjectMintedEvent.parameters = new Array()

  fontProjectMintedEvent.parameters.push(
    new ethereum.EventParam("fontId", ethereum.Value.fromFixedBytes(fontId))
  )
  fontProjectMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return fontProjectMintedEvent
}

export function createNewFontProjectCreatedEvent(
  fontId: Bytes,
  metaDataCID: string,
  creatorAddress: Address,
  mintPrice: BigInt,
  createdAt: BigInt,
  startDateTime: BigInt
): NewFontProjectCreated {
  let newFontProjectCreatedEvent = changetype<NewFontProjectCreated>(
    newMockEvent()
  )

  newFontProjectCreatedEvent.parameters = new Array()

  newFontProjectCreatedEvent.parameters.push(
    new ethereum.EventParam("fontId", ethereum.Value.fromFixedBytes(fontId))
  )
  newFontProjectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "metaDataCID",
      ethereum.Value.fromString(metaDataCID)
    )
  )
  newFontProjectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "creatorAddress",
      ethereum.Value.fromAddress(creatorAddress)
    )
  )
  newFontProjectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintPrice",
      ethereum.Value.fromUnsignedBigInt(mintPrice)
    )
  )
  newFontProjectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )
  newFontProjectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startDateTime",
      ethereum.Value.fromUnsignedBigInt(startDateTime)
    )
  )

  return newFontProjectCreatedEvent
}
