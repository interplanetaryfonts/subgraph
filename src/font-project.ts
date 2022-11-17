import { Address, ipfs, json } from "@graphprotocol/graph-ts";
import {
  FontProjectMinted,
  NewFontProjectCreated
} from "../generated/FontProject/FontProject"
import { Query, User, Link, FontProject, FontStream, FontStreamFund, FontStreamCollaboration} from "../generated/schema"
import { integer } from "@protofire/subgraph-toolkit";

export function handleNewFontProjectCreated(event: NewFontProjectCreated): void { 
  // TO DO 
}
export function handleFontProjectMinted(event: FontProjectMinted): void { 
  // TO DO 
}
;
