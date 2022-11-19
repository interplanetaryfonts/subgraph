import { Address, ipfs, json } from "@graphprotocol/graph-ts";
import {
  FontProjectMinted,
  NewFontProjectCreated,
  NewFontProjectCreated__Params,
  FontProject__idToFontProjectResult,

} from "../generated/FontProject/FontProject"
import { Query, User, Link, FontProject, FontStream, FontStreamFund, FontStreamCollaboration} from "../generated/schema"
import { integer } from "@protofire/subgraph-toolkit";

export function handleNewFontProjectCreated(event: NewFontProjectCreated): void { 
  let NewFontProjectCreated = FontProject.load(event.params.fontId.toHex());
    if (NewFontProjectCreated == null) {
    NewFontProjectCreated = new FontProject(event.params.fontId.toHex());

    NewFontProjectCreated.save();

    }
}
// export function handleFontProjectMinted(event: FontProjectMinted): void { 
//   // TO DO 
// }
;
