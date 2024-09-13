export type FromDataSize = {
  // Bits
  b: number;
  bits: number;
  // Decimal
  kb: number;
  Mb: number;
  Gb: number;
  Tb: number;
  kilobits: number;
  megabits: number;
  gigabits: number;
  terabits: number;
  // Binary
  Kib: number;
  Mib: number;
  Gib: number;
  Tib: number;
  kibibits: number;
  mebibits: number;
  gibibits: number;
  tebibits: number;
  // Bytes
  B: number;
  bytes: number;
  // Decimal
  kB: number;
  MB: number;
  GB: number;
  TB: number;
  kilobytes: number;
  megabytes: number;
  gigabytes: number;
  terabytes: number;
  // Binary
  KiB: number;
  MiB: number;
  GiB: number;
  TiB: number;
  kibibytes: number;
  mebibytes: number;
  gibibytes: number;
  tebibytes: number;
};

export type OptionalFromDataSize = Partial<FromDataSize>;

export class DataSize {
  static readonly BASE_10 = 1000;
  static readonly BASE_2 = 1024;
  private data: FromDataSize;

  private validation(data: OptionalFromDataSize) {
    const keys = Object.keys(data);
    const validKeys = [
      "b",
      "bits",
      "kb",
      "Mb",
      "Gb",
      "Tb",
      "kilobits",
      "megabits",
      "gigabits",
      "terabits",
      "Kib",
      "Mib",
      "Gib",
      "Tib",
      "kibibits",
      "mebibits",
      "gibibits",
      "tebibits",
      "B",
      "bytes",
      "kB",
      "MB",
      "GB",
      "TB",
      "kilobytes",
      "megabytes",
      "gigabytes",
      "terabytes",
      "KiB",
      "MiB",
      "GiB",
      "TiB",
      "kibibytes",
      "mebibytes",
      "gibibytes",
      "tebibytes",
    ];
    keys.forEach((key) => {
      if (!validKeys.includes(key)) {
        throw new Error(`Invalid key: ${key}`);
      }
    });
  }

  private constructor(data: OptionalFromDataSize) {
    this.validation(data);
    // Bits
    this.data = {
      b: data.b || 0,
      bits: data.bits || 0,
      kb: data.kb || 0,
      Mb: data.Mb || 0,
      Gb: data.Gb || 0,
      Tb: data.Tb || 0,
      kilobits: data.kilobits || 0,
      megabits: data.megabits || 0,
      gigabits: data.gigabits || 0,
      terabits: data.terabits || 0,
      Kib: data.Kib || 0,
      Mib: data.Mib || 0,
      Gib: data.Gib || 0,
      Tib: data.Tib || 0,
      kibibits: data.kibibits || 0,
      mebibits: data.mebibits || 0,
      gibibits: data.gibibits || 0,
      tebibits: data.tebibits || 0,

      // Bytes
      B: data.B || 0,
      bytes: data.bytes || 0,
      kB: data.kB || 0,
      MB: data.MB || 0,
      GB: data.GB || 0,
      TB: data.TB || 0,
      kilobytes: data.kilobytes || 0,
      megabytes: data.megabytes || 0,
      gigabytes: data.gigabytes || 0,
      terabytes: data.terabytes || 0,
      KiB: data.KiB || 0,
      MiB: data.MiB || 0,
      GiB: data.GiB || 0,
      TiB: data.TiB || 0,
      kibibytes: data.kibibytes || 0,
      mebibytes: data.mebibytes || 0,
      gibibytes: data.gibibytes || 0,
      tebibytes: data.tebibytes || 0,
    };
    console.log(this.data);
  }

  static from(data: FromDataSize) {
    return new DataSize(data);
  }

  // Bits
  static fromBits(value: number): DataSize {
    return new DataSize({ bits: value });
  }

  // Decimal

  static fromKilobits(value: number): DataSize {
    return new DataSize({ kilobits: value });
  }

  static fromMegabits(value: number): DataSize {
    return new DataSize({ megabits: value });
  }

  static fromGigabits(value: number): DataSize {
    return new DataSize({ gigabits: value });
  }

  static fromTerabits(value: number): DataSize {
    return new DataSize({ terabits: value });
  }

  // Binary

  static fromKibibits(value: number): DataSize {
    return new DataSize({ kibibits: value });
  }

  static fromMebibits(value: number): DataSize {
    return new DataSize({ mebibits: value });
  }

  static fromGibibits(value: number): DataSize {
    return new DataSize({ gibibits: value });
  }

  static fromTebibits(value: number): DataSize {
    return new DataSize({ tebibits: value });
  }

  // Bytes

  static fromBytes(value: number): DataSize {
    console.log({ value });
    return new DataSize({ bytes: value });
  }

  // Decimal

  static fromKilobytes(value: number): DataSize {
    return new DataSize({ kilobytes: value });
  }

  static fromMegabytes(value: number): DataSize {
    return new DataSize({ megabytes: value });
  }

  static fromGigabytes(value: number): DataSize {
    return new DataSize({ gigabytes: value });
  }

  static fromTerabytes(value: number): DataSize {
    return new DataSize({ terabytes: value });
  }

  // Binary

  static fromKibibytes(value: number): DataSize {
    return new DataSize({ kibibytes: value });
  }

  static fromMebibytes(value: number): DataSize {
    return new DataSize({ mebibytes: value });
  }

  static fromGibibytes(value: number): DataSize {
    return new DataSize({ gibibytes: value });
  }

  static fromTebibytes(value: number): DataSize {
    return new DataSize({ tebibytes: value });
  }

  calculateSize(divider: number): number {
    const values = {
      // Bits
      b: this.data.b / divider,
      bits: this.data.bits / divider,
      // Decimal
      kb: (this.data.kb * DataSize.BASE_10) / divider,
      Mb: (this.data.Mb * DataSize.BASE_10 ** 2) / divider,
      Gb: (this.data.Gb * DataSize.BASE_10 ** 3) / divider,
      Tb: (this.data.Tb * DataSize.BASE_10 ** 4) / divider,
      kilobits: (this.data.kilobits * DataSize.BASE_10) / divider,
      megabits: (this.data.megabits * DataSize.BASE_10 ** 2) / divider,
      gigabits: (this.data.gigabits * DataSize.BASE_10 ** 3) / divider,
      terabits: (this.data.terabits * DataSize.BASE_10 ** 4) / divider,
      // Binary
      Kib: (this.data.Kib * DataSize.BASE_2) / divider,
      Mib: (this.data.Mib * DataSize.BASE_2 ** 2) / divider,
      Gib: (this.data.Gib * DataSize.BASE_2 ** 3) / divider,
      Tib: (this.data.Tib * DataSize.BASE_2 ** 4) / divider,
      kibibits: (this.data.kibibits * DataSize.BASE_2) / divider,
      mebibits: (this.data.mebibits * DataSize.BASE_2 ** 2) / divider,
      gibibits: (this.data.gibibits * DataSize.BASE_2 ** 3) / divider,
      tebibits: (this.data.tebibits * DataSize.BASE_2 ** 4) / divider,

      // Bytes
      B: (this.data.B * 8) / divider,
      bytes: (this.data.bytes * 8) / divider,
      // Decimal
      kB: (this.data.kB * DataSize.BASE_10 * 8) / divider,
      MB: (this.data.MB * DataSize.BASE_10 ** 2 * 8) / divider,
      GB: (this.data.GB * DataSize.BASE_10 ** 3 * 8) / divider,
      TB: (this.data.TB * DataSize.BASE_10 ** 4 * 8) / divider,
      kilobytes: (this.data.kilobytes * DataSize.BASE_10 * 8) / divider,
      megabytes: (this.data.megabytes * DataSize.BASE_10 ** 2 * 8) / divider,
      gigabytes: (this.data.gigabytes * DataSize.BASE_10 ** 3 * 8) / divider,
      terabytes: (this.data.terabytes * DataSize.BASE_10 ** 4 * 8) / divider,
      // Binary
      KiB: (this.data.KiB * DataSize.BASE_2 * 8) / divider,
      MiB: (this.data.MiB * DataSize.BASE_2 ** 2 * 8) / divider,
      GiB: (this.data.GiB * DataSize.BASE_2 ** 3 * 8) / divider,
      TiB: (this.data.TiB * DataSize.BASE_2 ** 4 * 8) / divider,
      kibibytes: (this.data.kibibytes * DataSize.BASE_2 * 8) / divider,
      mebibytes: (this.data.mebibytes * DataSize.BASE_2 ** 2 * 8) / divider,
      gibibytes: (this.data.gibibytes * DataSize.BASE_2 ** 3 * 8) / divider,
      tebibytes: (this.data.tebibytes * DataSize.BASE_2 ** 4 * 8) / divider,
    };
    return Object.values(values).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  // Bits

  toBits(): number {
    return this.calculateSize(1);
  }

  toKilobits(): number {
    return this.calculateSize(DataSize.BASE_10);
  }

  toMegabits(): number {
    return this.calculateSize(DataSize.BASE_10 ** 2);
  }

  toGigabits(): number {
    return this.calculateSize(DataSize.BASE_10 ** 3);
  }

  toTerabits(): number {
    return this.calculateSize(DataSize.BASE_10 ** 4);
  }

  // Binary

  toKibibits(): number {
    return this.calculateSize(DataSize.BASE_2);
  }

  toMebibits(): number {
    return this.calculateSize(DataSize.BASE_2 ** 2);
  }

  toGibibits(): number {
    return this.calculateSize(DataSize.BASE_2 ** 3);
  }

  toTebibits(): number {
    return this.calculateSize(DataSize.BASE_2 ** 4);
  }

  // Bytes

  toBytes(): number {
    return this.calculateSize(1 * 8);
  }

  // Decimal

  toKilobytes(): number {
    return this.calculateSize(DataSize.BASE_10 * 8);
  }

  toMegabytes(): number {
    return this.calculateSize(DataSize.BASE_10 ** 2 * 8);
  }

  toGigabytes(): number {
    return this.calculateSize(DataSize.BASE_10 ** 3 * 8);
  }

  toTerabytes(): number {
    return this.calculateSize(DataSize.BASE_10 ** 4 * 8);
  }

  // Binary

  toKibibytes(): number {
    return this.calculateSize(DataSize.BASE_2 * 8);
  }

  toMebibytes(): number {
    return this.calculateSize(DataSize.BASE_2 ** 2 * 8);
  }

  toGibibytes(): number {
    return this.calculateSize(DataSize.BASE_2 ** 3 * 8);
  }

  toTebibytes(): number {
    return this.calculateSize(DataSize.BASE_2 ** 4 * 8);
  }
}
