export interface FromDataSize {
  b?: number;
  B?: number;
  kB?: number;
  MB?: number;
  GB?: number;
  TB?: number;
  Kib?: number;
  Mib?: number;
  Gib?: number;
  TiB?: number;
}

export class DataSize {
  constructor(private _bytes: number) {}
  private static readonly BASE_10 = 1000;
  private static readonly BASE_1024 = 1024;

  static from(data: FromDataSize) {
    let bytes = 0;
    if (data.b) {
      bytes = data.b / 8;
    }
    if (data.B) {
      bytes += data.B;
    }
    if (data.kB) {
      bytes += data.kB * DataSize.BASE_10;
    }
    if (data.MB) {
      bytes += data.MB * DataSize.BASE_10 ** 2;
    }
    if (data.GB) {
      bytes += data.GB * DataSize.BASE_10 ** 3;
    }
    if (data.TB) {
      bytes += data.TB * DataSize.BASE_10 ** 4;
    }
    if (data.Kib) {
      bytes += data.Kib * DataSize.BASE_1024;
    }
    if (data.Mib) {
      bytes += data.Mib * DataSize.BASE_1024 ** 2;
    }
    if (data.Gib) {
      bytes += data.Gib * DataSize.BASE_1024 ** 3;
    }
    if (data.TiB) {
      bytes += data.TiB * DataSize.BASE_1024 ** 4;
    }
    return new DataSize(bytes);
  }

  static fromBits(value: number): DataSize {
    const bytes = value / 8;
    return new DataSize(bytes);
  }

  static fromBytes(value: number): DataSize {
    return new DataSize(value);
  }

  static fromKilobytes(value: number): DataSize {
    const bytes = value * DataSize.BASE_10;
    return new DataSize(bytes);
  }

  static fromMegabytes(value: number): DataSize {
    const bytes = value * DataSize.BASE_10 ** 2;
    return new DataSize(bytes);
  }

  static fromGigabytes(value: number): DataSize {
    const bytes = value * DataSize.BASE_10 ** 3;
    return new DataSize(bytes);
  }

  static fromTerabytes(value: number): DataSize {
    const bytes = value * DataSize.BASE_10 ** 4;
    return new DataSize(bytes);
  }

  static fromKibibytes(value: number): DataSize {
    const bytes = value * DataSize.BASE_1024;
    return new DataSize(bytes);
  }

  static fromMebibytes(value: number): DataSize {
    const bytes = value * DataSize.BASE_1024 ** 2;
    return new DataSize(bytes);
  }

  static fromGibibytes(value: number): DataSize {
    const bytes = value * DataSize.BASE_1024 ** 3;
    return new DataSize(bytes);
  }

  static fromTebibytes(value: number): DataSize {
    const bytes = value * DataSize.BASE_1024 ** 4;
    return new DataSize(bytes);
  }

  toBits(): number {
    return this._bytes * 8;
  }

  toBytes(): number {
    return this._bytes;
  }

  toKilobytes(): number {
    return this._bytes / DataSize.BASE_10;
  }

  toMegabytes(): number {
    return this._bytes / DataSize.BASE_10 ** 2;
  }

  toGigabytes(): number {
    return this._bytes / DataSize.BASE_10 ** 3;
  }

  toTerabytes(): number {
    return this._bytes / DataSize.BASE_10 ** 4;
  }

  toKibibytes(): number {
    return this._bytes / DataSize.BASE_1024;
  }

  toMebibytes(): number {
    return this._bytes / DataSize.BASE_1024 ** 2;
  }

  toGibibytes(): number {
    return this._bytes / DataSize.BASE_1024 ** 3;
  }

  toTebibytes(): number {
    return this._bytes / DataSize.BASE_1024 ** 4;
  }
}
