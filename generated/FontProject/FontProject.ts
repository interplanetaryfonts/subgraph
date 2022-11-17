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

  get fontId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NewFontProjectCreated extends ethereum.Event {
  get params(): NewFontProjectCreated__Params {
    return new NewFontProjectCreated__Params(this);
  }
}

export class NewFontProjectCreated__Params {
  _event: NewFontProjectCreated;

  constructor(event: NewFontProjectCreated) {
    this._event = event;
  }

  get fontId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get metaDataCID(): string {
    return this._event.parameters[1].value.toString();
  }

  get creatorAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get mintPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get createdAt(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get startDateTime(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class FontProject__idToFontProjectResult {
  value0: Bytes;
  value1: string;
  value2: Address;
  value3: BigInt;
  value4: Address;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;

  constructor(
    value0: Bytes,
    value1: string,
    value2: Address,
    value3: BigInt,
    value4: Address,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }

  getId(): Bytes {
    return this.value0;
  }

  getMetaDataCID(): string {
    return this.value1;
  }

  getCreatorAddress(): Address {
    return this.value2;
  }

  getMintPrice(): BigInt {
    return this.value3;
  }

  getIdaDistributionToken(): Address {
    return this.value4;
  }

  getRoyaltyIDAIndex(): BigInt {
    return this.value5;
  }

  getCreatedAt(): BigInt {
    return this.value6;
  }

  getStartDateTime(): BigInt {
    return this.value7;
  }
}

export class FontProject extends ethereum.SmartContract {
  static bind(address: Address): FontProject {
    return new FontProject("FontProject", address);
  }

  idToFontProject(param0: Bytes): FontProject__idToFontProjectResult {
    let result = super.call(
      "idToFontProject",
      "idToFontProject(bytes32):(bytes32,string,address,uint256,address,uint32,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new FontProject__idToFontProjectResult(
      result[0].toBytes(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt()
    );
  }

  try_idToFontProject(
    param0: Bytes
  ): ethereum.CallResult<FontProject__idToFontProjectResult> {
    let result = super.tryCall(
      "idToFontProject",
      "idToFontProject(bytes32):(bytes32,string,address,uint256,address,uint32,uint256,uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FontProject__idToFontProjectResult(
        value[0].toBytes(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt()
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

  get _superToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCollaboratorCall extends ethereum.Call {
  get inputs(): AddCollaboratorCall__Inputs {
    return new AddCollaboratorCall__Inputs(this);
  }

  get outputs(): AddCollaboratorCall__Outputs {
    return new AddCollaboratorCall__Outputs(this);
  }
}

export class AddCollaboratorCall__Inputs {
  _call: AddCollaboratorCall;

  constructor(call: AddCollaboratorCall) {
    this._call = call;
  }

  get fontId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get collaborator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddCollaboratorCall__Outputs {
  _call: AddCollaboratorCall;

  constructor(call: AddCollaboratorCall) {
    this._call = call;
  }
}

export class CreateNewFontProjectCall extends ethereum.Call {
  get inputs(): CreateNewFontProjectCall__Inputs {
    return new CreateNewFontProjectCall__Inputs(this);
  }

  get outputs(): CreateNewFontProjectCall__Outputs {
    return new CreateNewFontProjectCall__Outputs(this);
  }
}

export class CreateNewFontProjectCall__Inputs {
  _call: CreateNewFontProjectCall;

  constructor(call: CreateNewFontProjectCall) {
    this._call = call;
  }

  get createdAt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get startDateTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get mintPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get metaDataCID(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreateNewFontProjectCall__Outputs {
  _call: CreateNewFontProjectCall;

  constructor(call: CreateNewFontProjectCall) {
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

export class MintFontProjectCall extends ethereum.Call {
  get inputs(): MintFontProjectCall__Inputs {
    return new MintFontProjectCall__Inputs(this);
  }

  get outputs(): MintFontProjectCall__Outputs {
    return new MintFontProjectCall__Outputs(this);
  }
}

export class MintFontProjectCall__Inputs {
  _call: MintFontProjectCall;

  constructor(call: MintFontProjectCall) {
    this._call = call;
  }

  get fontId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class MintFontProjectCall__Outputs {
  _call: MintFontProjectCall;

  constructor(call: MintFontProjectCall) {
    this._call = call;
  }
}
