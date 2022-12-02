// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get walletAddress(): Bytes {
    let value = this.get("walletAddress");
    return value!.toBytes();
  }

  set walletAddress(value: Bytes) {
    this.set("walletAddress", Value.fromBytes(value));
  }

  get profileInfoCID(): string {
    let value = this.get("profileInfoCID");
    return value!.toString();
  }

  set profileInfoCID(value: string) {
    this.set("profileInfoCID", Value.fromString(value));
  }

  get email(): string | null {
    let value = this.get("email");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set email(value: string | null) {
    if (!value) {
      this.unset("email");
    } else {
      this.set("email", Value.fromString(<string>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get website(): string | null {
    let value = this.get("website");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set website(value: string | null) {
    if (!value) {
      this.unset("website");
    } else {
      this.set("website", Value.fromString(<string>value));
    }
  }

  get bio(): string | null {
    let value = this.get("bio");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bio(value: string | null) {
    if (!value) {
      this.unset("bio");
    } else {
      this.set("bio", Value.fromString(<string>value));
    }
  }

  get links(): Array<string> | null {
    let value = this.get("links");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set links(value: Array<string> | null) {
    if (!value) {
      this.unset("links");
    } else {
      this.set("links", Value.fromStringArray(<Array<string>>value));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt | null {
    let value = this.get("updatedAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updatedAt(value: BigInt | null) {
    if (!value) {
      this.unset("updatedAt");
    } else {
      this.set("updatedAt", Value.fromBigInt(<BigInt>value));
    }
  }

  get lensHandle(): string | null {
    let value = this.get("lensHandle");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lensHandle(value: string | null) {
    if (!value) {
      this.unset("lensHandle");
    } else {
      this.set("lensHandle", Value.fromString(<string>value));
    }
  }
}

export class Link extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Link entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Link must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Link", id.toString(), this);
    }
  }

  static load(id: string): Link | null {
    return changetype<Link | null>(store.get("Link", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get url(): string {
    let value = this.get("url");
    return value!.toString();
  }

  set url(value: string) {
    this.set("url", Value.fromString(value));
  }
}

export class FontProject extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FontProject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FontProject must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FontProject", id.toString(), this);
    }
  }

  static load(id: string): FontProject | null {
    return changetype<FontProject | null>(store.get("FontProject", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creatorAddress(): Bytes {
    let value = this.get("creatorAddress");
    return value!.toBytes();
  }

  set creatorAddress(value: Bytes) {
    this.set("creatorAddress", Value.fromBytes(value));
  }

  get perCharacterMintPrice(): BigInt {
    let value = this.get("perCharacterMintPrice");
    return value!.toBigInt();
  }

  set perCharacterMintPrice(value: BigInt) {
    this.set("perCharacterMintPrice", Value.fromBigInt(value));
  }

  get metaDataCID(): string {
    let value = this.get("metaDataCID");
    return value!.toString();
  }

  set metaDataCID(value: string) {
    this.set("metaDataCID", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get royaltyIDAIndex(): BigInt | null {
    let value = this.get("royaltyIDAIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set royaltyIDAIndex(value: BigInt | null) {
    if (!value) {
      this.unset("royaltyIDAIndex");
    } else {
      this.set("royaltyIDAIndex", Value.fromBigInt(<BigInt>value));
    }
  }

  get idaDistributionToken(): Bytes {
    let value = this.get("idaDistributionToken");
    return value!.toBytes();
  }

  set idaDistributionToken(value: Bytes) {
    this.set("idaDistributionToken", Value.fromBytes(value));
  }

  get fontFilesCID(): string {
    let value = this.get("fontFilesCID");
    return value!.toString();
  }

  set fontFilesCID(value: string) {
    this.set("fontFilesCID", Value.fromString(value));
  }

  get mintLimit(): BigInt {
    let value = this.get("mintLimit");
    return value!.toBigInt();
  }

  set mintLimit(value: BigInt) {
    this.set("mintLimit", Value.fromBigInt(value));
  }

  get launchDateTime(): BigInt {
    let value = this.get("launchDateTime");
    return value!.toBigInt();
  }

  set launchDateTime(value: BigInt) {
    this.set("launchDateTime", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt | null {
    let value = this.get("updatedAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updatedAt(value: BigInt | null) {
    if (!value) {
      this.unset("updatedAt");
    } else {
      this.set("updatedAt", Value.fromBigInt(<BigInt>value));
    }
  }
}
