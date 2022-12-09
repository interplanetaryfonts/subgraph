// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FontProjectCreated extends ethereum.Event {
  get params(): FontProjectCreated__Params {
    return new FontProjectCreated__Params(this);
  }
}

export class FontProjectCreated__Params {
  _event: FontProjectCreated;

  constructor(event: FontProjectCreated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get metaDataCID(): string {
    return this._event.parameters[1].value.toString();
  }

  get creatorAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get perCharacterMintPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get mintLimit(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get launchDateTime(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get createdAt(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class FontProjectMinted extends ethereum.Event {
  get params(): FontProjectMinted__Params {
    return new FontProjectMinted__Params(this);
  }
}

export class FontProjectMinted__Params {
  _event: FontProjectMinted;

  constructor(event: FontProjectMinted) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UserCreated extends ethereum.Event {
  get params(): UserCreated__Params {
    return new UserCreated__Params(this);
  }
}

export class UserCreated__Params {
  _event: UserCreated;

  constructor(event: UserCreated) {
    this._event = event;
  }

  get walletAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get profileInfoCID(): string {
    return this._event.parameters[1].value.toString();
  }

  get createdAt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get updatedAt(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get lensHandle(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class FontProjectV2__addressToUserResult {
  value0: Address;
  value1: string;
  value2: BigInt;
  value3: BigInt;
  value4: string;

  constructor(
    value0: Address,
    value1: string,
    value2: BigInt,
    value3: BigInt,
    value4: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }

  getWalletAddress(): Address {
    return this.value0;
  }

  getProfileInfoCID(): string {
    return this.value1;
  }

  getCreatedAt(): BigInt {
    return this.value2;
  }

  getUpdatedAt(): BigInt {
    return this.value3;
  }

  getLensHandle(): string {
    return this.value4;
  }
}

export class FontProjectV2__idToFontProjectResult {
  value0: Bytes;
  value1: Address;
  value2: BigInt;
  value3: string;
  value4: BigInt;
  value5: Address;
  value6: string;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;

  constructor(
    value0: Bytes,
    value1: Address,
    value2: BigInt,
    value3: string,
    value4: BigInt,
    value5: Address,
    value6: string,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    return map;
  }

  getId(): Bytes {
    return this.value0;
  }

  getCreatorAddress(): Address {
    return this.value1;
  }

  getPerCharacterMintPrice(): BigInt {
    return this.value2;
  }

  getMetaDataCID(): string {
    return this.value3;
  }

  getRoyaltyIDAIndex(): BigInt {
    return this.value4;
  }

  getIdaDistributionToken(): Address {
    return this.value5;
  }

  getFontFilesCID(): string {
    return this.value6;
  }

  getMintLimit(): BigInt {
    return this.value7;
  }

  getLaunchDateTime(): BigInt {
    return this.value8;
  }

  getCreatedAt(): BigInt {
    return this.value9;
  }

  getUpdatedAt(): BigInt {
    return this.value10;
  }
}

export class FontProjectV2 extends ethereum.SmartContract {
  static bind(address: Address): FontProjectV2 {
    return new FontProjectV2("FontProjectV2", address);
  }

  addressToUser(param0: Address): FontProjectV2__addressToUserResult {
    let result = super.call(
      "addressToUser",
      "addressToUser(address):(address,string,uint256,uint256,string)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new FontProjectV2__addressToUserResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toString()
    );
  }

  try_addressToUser(
    param0: Address
  ): ethereum.CallResult<FontProjectV2__addressToUserResult> {
    let result = super.tryCall(
      "addressToUser",
      "addressToUser(address):(address,string,uint256,uint256,string)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FontProjectV2__addressToUserResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toString()
      )
    );
  }

  fontProjectIdToMints(param0: Bytes, param1: BigInt): BigInt {
    let result = super.call(
      "fontProjectIdToMints",
      "fontProjectIdToMints(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_fontProjectIdToMints(
    param0: Bytes,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fontProjectIdToMints",
      "fontProjectIdToMints(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  idToFontProject(param0: Bytes): FontProjectV2__idToFontProjectResult {
    let result = super.call(
      "idToFontProject",
      "idToFontProject(bytes32):(bytes32,address,uint256,string,uint32,address,string,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new FontProjectV2__idToFontProjectResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toString(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt()
    );
  }

  try_idToFontProject(
    param0: Bytes
  ): ethereum.CallResult<FontProjectV2__idToFontProjectResult> {
    let result = super.tryCall(
      "idToFontProject",
      "idToFontProject(bytes32):(bytes32,address,uint256,string,uint32,address,string,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FontProjectV2__idToFontProjectResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toString(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _host(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ida(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddFontStreamCollaboratorCall extends ethereum.Call {
  get inputs(): AddFontStreamCollaboratorCall__Inputs {
    return new AddFontStreamCollaboratorCall__Inputs(this);
  }

  get outputs(): AddFontStreamCollaboratorCall__Outputs {
    return new AddFontStreamCollaboratorCall__Outputs(this);
  }
}

export class AddFontStreamCollaboratorCall__Inputs {
  _call: AddFontStreamCollaboratorCall;

  constructor(call: AddFontStreamCollaboratorCall) {
    this._call = call;
  }

  get fontProjectId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get collaborator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get deliverablesCID(): string {
    return this._call.inputValues[2].value.toString();
  }

  get fontStreamId(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class AddFontStreamCollaboratorCall__Outputs {
  _call: AddFontStreamCollaboratorCall;

  constructor(call: AddFontStreamCollaboratorCall) {
    this._call = call;
  }
}

export class CreateFontProjectCall extends ethereum.Call {
  get inputs(): CreateFontProjectCall__Inputs {
    return new CreateFontProjectCall__Inputs(this);
  }

  get outputs(): CreateFontProjectCall__Outputs {
    return new CreateFontProjectCall__Outputs(this);
  }
}

export class CreateFontProjectCall__Inputs {
  _call: CreateFontProjectCall;

  constructor(call: CreateFontProjectCall) {
    this._call = call;
  }

  get createdAt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get launchDateTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get perCharacterMintPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get mintLimit(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get distributionSuperToken(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get metaDataCID(): string {
    return this._call.inputValues[5].value.toString();
  }

  get fontFilesCID(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class CreateFontProjectCall__Outputs {
  _call: CreateFontProjectCall;

  constructor(call: CreateFontProjectCall) {
    this._call = call;
  }
}

export class CreateUserCall extends ethereum.Call {
  get inputs(): CreateUserCall__Inputs {
    return new CreateUserCall__Inputs(this);
  }

  get outputs(): CreateUserCall__Outputs {
    return new CreateUserCall__Outputs(this);
  }
}

export class CreateUserCall__Inputs {
  _call: CreateUserCall;

  constructor(call: CreateUserCall) {
    this._call = call;
  }

  get lensHandle(): string {
    return this._call.inputValues[0].value.toString();
  }

  get profileInfoCID(): string {
    return this._call.inputValues[1].value.toString();
  }

  get createdAt(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateUserCall__Outputs {
  _call: CreateUserCall;

  constructor(call: CreateUserCall) {
    this._call = call;
  }
}

export class DistributeFontProfitCall extends ethereum.Call {
  get inputs(): DistributeFontProfitCall__Inputs {
    return new DistributeFontProfitCall__Inputs(this);
  }

  get outputs(): DistributeFontProfitCall__Outputs {
    return new DistributeFontProfitCall__Outputs(this);
  }
}

export class DistributeFontProfitCall__Inputs {
  _call: DistributeFontProfitCall;

  constructor(call: DistributeFontProfitCall) {
    this._call = call;
  }

  get fontId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DistributeFontProfitCall__Outputs {
  _call: DistributeFontProfitCall;

  constructor(call: DistributeFontProfitCall) {
    this._call = call;
  }
}

export class MinFontProjectCall extends ethereum.Call {
  get inputs(): MinFontProjectCall__Inputs {
    return new MinFontProjectCall__Inputs(this);
  }

  get outputs(): MinFontProjectCall__Outputs {
    return new MinFontProjectCall__Outputs(this);
  }
}

export class MinFontProjectCall__Inputs {
  _call: MinFontProjectCall;

  constructor(call: MinFontProjectCall) {
    this._call = call;
  }
}

export class MinFontProjectCall__Outputs {
  _call: MinFontProjectCall;

  constructor(call: MinFontProjectCall) {
    this._call = call;
  }
}