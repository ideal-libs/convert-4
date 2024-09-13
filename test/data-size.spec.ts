import { DataSize } from "../packages";

describe("DataSize Tests", () => {
  describe("Internatinal System of Units", () => {
    it("fromBytes toKilobytes", () => {
      const dataSize = DataSize.fromBytes(1000);
      expect(dataSize.toKilobytes()).toEqual(1);
    });
    it("fromKilobytes toBytes", () => {
      const dataSize = DataSize.fromKilobytes(1);
      expect(dataSize.toBytes()).toEqual(1000);
    });
    it("fromKilobytes toMegabytes", () => {
      const dataSize = DataSize.fromKilobytes(1000);
      expect(dataSize.toMegabytes()).toEqual(1);
    });
    it("fromMegaBytes toKilobytes", () => {
      const dataSize = DataSize.fromKilobytes(1);
      expect(dataSize.toBytes()).toEqual(1000);
    });
    it("fromMegabytes toGigabytes", () => {
      const dataSize = DataSize.fromMegabytes(1000);
      expect(dataSize.toGigabytes()).toEqual(1);
    });
    it("fromGigabytes toTerabytes", () => {
      const dataSize = DataSize.fromGigabytes(1000);
      expect(dataSize.toTerabytes()).toEqual(1);
    });
    it("fromTerabytes toGigabytes", () => {
      const dataSize = DataSize.fromTerabytes(1);
      expect(dataSize.toGigabytes()).toEqual(1000);
    });
    it("fromGigaBytes toMegabytes", () => {
      const dataSize = DataSize.fromGigabytes(1);
      expect(dataSize.toMegabytes()).toEqual(1000);
    });
  });

  describe("Binary System of Units", () => {
    it("fromBytes toKibibytes", () => {
      const dataSize = DataSize.fromBytes(1024);
      expect(dataSize.toKibibytes()).toEqual(1);
    });
    it("fromKibibytes toBytes", () => {
      const dataSize = DataSize.fromKibibytes(1);
      expect(dataSize.toBytes()).toEqual(1024);
    });
    it("fromKibibytes toMebibytes", () => {
      const dataSize = DataSize.fromKibibytes(1024);
      expect(dataSize.toMebibytes()).toEqual(1);
    });
    it("fromMebibytes toKibibytes", () => {
      const dataSize = DataSize.fromMebibytes(1);
      expect(dataSize.toKibibytes()).toEqual(1024);
    });
    it("fromMebibytes toGibibytes", () => {
      const dataSize = DataSize.fromMebibytes(1024);
      expect(dataSize.toGibibytes()).toEqual(1);
    });
    it("fromGibibytes toMebibytes", () => {
      const dataSize = DataSize.fromGibibytes(1);
      expect(dataSize.toMebibytes()).toEqual(1024);
    });
    it("fromGibibytes toTebibytes", () => {
      const dataSize = DataSize.fromGibibytes(1024);
      expect(dataSize.toTebibytes()).toEqual(1);
    });
    it("fromTebibytes toGibibytes", () => {
      const dataSize = DataSize.fromTebibytes(1);
      expect(dataSize.toGibibytes()).toEqual(1024);
    });
  });

  describe("Mixed Units", () => {
    // Bits
    it("fromKilobits toKibibits", () => {
      const dataSize = DataSize.fromKilobits(1_024);
      expect(dataSize.toKibibits()).toEqual(1000);
    });

    it("fromKibibits toKilobits", () => {
      const dataSize = DataSize.fromKibibits(1_000);
      expect(dataSize.toKilobits()).toEqual(1_024);
    });

    it("fromMegabits toMebibits", () => {
      const dataSize = DataSize.fromMegabits(1_048_576);
      expect(dataSize.toMebibits()).toEqual(1_000_000);
    });

    it("fromMebibits toMegabits", () => {
      const dataSize = DataSize.fromMebibits(1_000_000);
      expect(dataSize.toMegabits()).toEqual(1_048_576);
    });

    it("fromGigabits toGibibits", () => {
      const dataSize = DataSize.fromGigabits(1_073_741_824);
      expect(dataSize.toGibibits()).toEqual(1_000_000_000);
    });

    it("fromGibibits toGigabits", () => {
      const dataSize = DataSize.fromGibibits(1_000_000_000);
      expect(dataSize.toGigabits()).toEqual(1_073_741_824);
    });

    it("fromTerabits toTebibits", () => {
      const dataSize = DataSize.fromTerabits(1_099_511_627_776);
      expect(dataSize.toTebibits()).toEqual(1_000_000_000_000);
    });

    it("fromTebibits toTerabits", () => {
      const dataSize = DataSize.fromTebibits(1_000_000_000_000);
      expect(dataSize.toTerabits()).toEqual(1_099_511_627_776);
    });
    // Bytes
    it("fromKilobytes tokibibytes", () => {
      const dataSize = DataSize.fromKilobytes(1024);
      expect(dataSize.toKibibytes()).toEqual(1000);
    });

    it("fromKibibytes tokibibytes", () => {
      const dataSize = DataSize.fromKibibytes(1_000);
      expect(dataSize.toKilobytes()).toEqual(1024);
    });

    it("fromMegabytes toMebibytes", () => {
      const dataSize = DataSize.fromMegabytes(1_048_576);
      expect(dataSize.toMebibytes()).toEqual(1_000_000);
    });

    it("fromMebibytes toMegabytes", () => {
      const dataSize = DataSize.fromMebibytes(1_000_000);
      expect(dataSize.toMegabytes()).toEqual(1_048_576);
    });

    it("fromGigabytes toGibibytes", () => {
      const dataSize = DataSize.fromGigabytes(1_073_741_824);
      expect(dataSize.toGibibytes()).toEqual(1_000_000_000);
    });

    it("fromGibibytes toGigabytes", () => {
      const dataSize = DataSize.fromGibibytes(1_000_000_000);
      expect(dataSize.toGigabytes()).toEqual(1_073_741_824);
    });

    it("fromTerabytes toTebibytes", () => {
      const dataSize = DataSize.fromTerabytes(1_099_511_627_776);
      expect(dataSize.toTebibytes()).toEqual(1_000_000_000_000);
    });

    it("fromTebibytes toTerabytes", () => {
      const dataSize = DataSize.fromTebibytes(1_000_000_000_000);
      expect(dataSize.toTerabytes()).toEqual(1_099_511_627_776);
    });
  });

  it("fromBits toBytes", () => {
    const dataSize = DataSize.fromBits(8);
    expect(dataSize.toBytes()).toEqual(1);
  });

  it("fromBytes toBits", () => {
    const dataSize = DataSize.fromBytes(1);
    expect(dataSize.toBits()).toEqual(8);
  });

  it("fromDataSize with mixed units", () => {
    const dataSize = DataSize.from({
      b: 1,
      B: 1,
      kb: 1,
      bits: 1,
      bytes: 1,
      GB: 1,
      Gb: 1,
      GiB: 1,
      Gib: 1,
      gibibits: 1,
      gibibytes: 1,
      gigabits: 1,
      gigabytes: 1,
      kB: 1,
      KiB: 1,
      Kib: 1,
      kibibits: 1,
      kibibytes: 1,
      kilobits: 1,
      kilobytes: 1,
      MB: 1,
      Mb: 1,
      mebibits: 1,
      mebibytes: 1,
      megabits: 1,
      megabytes: 1,
      MiB: 1,
      Mib: 1,
      TB: 1,
      Tb: 1,
      tebibits: 1,
      tebibytes: 1,
      terabits: 1,
      terabytes: 1,
      TiB: 1,
      Tib: 1,
    });
    expect(dataSize.toBits()).toEqual(37828573563618);
  });

  it("should return error when invalid data is passed", () => {
    expect(() => DataSize.from({ bitis: 1 } as any)).toThrow(
      "Invalid key: bitis"
    );
  });
});
