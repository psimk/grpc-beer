// package: 
// file: beer_time.proto

import * as jspb from "google-protobuf";

export class Beer extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getStyle(): string;
  setStyle(value: string): void;

  getAbv(): number;
  setAbv(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Beer.AsObject;
  static toObject(includeInstance: boolean, msg: Beer): Beer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Beer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Beer;
  static deserializeBinaryFromReader(message: Beer, reader: jspb.BinaryReader): Beer;
}

export namespace Beer {
  export type AsObject = {
    name: string,
    country: string,
    style: string,
    abv: number,
  }
}

export class AnswerResult extends jspb.Message {
  getResult(): Result;
  setResult(value: Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerResult.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerResult): AnswerResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnswerResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerResult;
  static deserializeBinaryFromReader(message: AnswerResult, reader: jspb.BinaryReader): AnswerResult;
}

export namespace AnswerResult {
  export type AsObject = {
    result: Result,
  }
}

export class Countries extends jspb.Message {
  clearCountriesList(): void;
  getCountriesList(): Array<string>;
  setCountriesList(value: Array<string>): void;
  addCountries(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Countries.AsObject;
  static toObject(includeInstance: boolean, msg: Countries): Countries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Countries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Countries;
  static deserializeBinaryFromReader(message: Countries, reader: jspb.BinaryReader): Countries;
}

export namespace Countries {
  export type AsObject = {
    countriesList: Array<string>,
  }
}

export class Styles extends jspb.Message {
  clearStylesList(): void;
  getStylesList(): Array<string>;
  setStylesList(value: Array<string>): void;
  addStyles(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Styles.AsObject;
  static toObject(includeInstance: boolean, msg: Styles): Styles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Styles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Styles;
  static deserializeBinaryFromReader(message: Styles, reader: jspb.BinaryReader): Styles;
}

export namespace Styles {
  export type AsObject = {
    stylesList: Array<string>,
  }
}

export class ConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigRequest): ConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigRequest;
  static deserializeBinaryFromReader(message: ConfigRequest, reader: jspb.BinaryReader): ConfigRequest;
}

export namespace ConfigRequest {
  export type AsObject = {
  }
}

export class BeerRequest extends jspb.Message {
  getDelay(): number;
  setDelay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeerRequest): BeerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeerRequest;
  static deserializeBinaryFromReader(message: BeerRequest, reader: jspb.BinaryReader): BeerRequest;
}

export namespace BeerRequest {
  export type AsObject = {
    delay: number,
  }
}

export enum Result {
  INCORRECT = 0,
  CORRECT = 1,
}

