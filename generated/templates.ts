// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { DataSourceTemplate, DataSourceContext } from "@graphprotocol/graph-ts";

export class FontMetadata extends DataSourceTemplate {
  static create(cid: string): void {
    DataSourceTemplate.create("FontMetadata", [cid]);
  }

  static createWithContext(cid: string, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("FontMetadata", [cid], context);
  }
}
