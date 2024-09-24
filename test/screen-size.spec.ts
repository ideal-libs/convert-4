import { ScreenSize } from "../packages";

describe("ScreenSize Tests", () => {
  describe("Conversions using fromFullUnitName Functions", () => {
    it("fromPicas toInches", () => {
      const screenSize = ScreenSize.fromPicas(6);
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromPoints toInches", () => {
      const screenSize = ScreenSize.fromPoints(72);
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromPixels toInches", () => {
      const screenSize = ScreenSize.fromPixels(72);
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromInches toPoints", () => {
      const screenSize = ScreenSize.fromInches(1);
      expect(screenSize.toPoints()).toEqual(72);
    });
    it("fromCentimeters toInches", () => {
      const screenSize = ScreenSize.fromCentimeters(2.54);
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromMillimeters toCentimeters", () => {
      const screenSize = ScreenSize.fromMillimeters(10);
      expect(screenSize.toCentimeters()).toEqual(1);
    });
  });

  describe("Conversions using from {FullUnitName}", () => {
    it("fromPicas toInches", () => {
      const screenSize = ScreenSize.from({ picas: 6 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromPoints toInches", () => {
      const screenSize = ScreenSize.from({ points: 72 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromInches toPoints", () => {
      const screenSize = ScreenSize.from({ inches: 1 });
      expect(screenSize.toPoints()).toEqual(72);
    });
    it("fromCentimeters toInches", () => {
      const screenSize = ScreenSize.from({ centimeters: 2.54 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromPixels toInches", () => {
      const screenSize = ScreenSize.from({ pixels: 72 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromMillimeters toCentimeters", () => {
      const screenSize = ScreenSize.from({ millimeters: 10 });
      expect(screenSize.toCentimeters()).toEqual(1);
    });
  });

  describe("Conversions using from {AbbreviatedUnitName}", () => {
    it("fromPicas toInches", () => {
      const screenSize = ScreenSize.from({ pc: 6 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromPoints toInches", () => {
      const screenSize = ScreenSize.from({ pt: 72 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromInches toPoints", () => {
      const screenSize = ScreenSize.from({ in: 1 });
      expect(screenSize.toPoints()).toEqual(72);
    });
    it("fromCentimeters toInches", () => {
      const screenSize = ScreenSize.from({ cm: 2.54 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromPixels toInches", () => {
      const screenSize = ScreenSize.from({ px: 72 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromMillimeters toCentimeters", () => {
      const screenSize = ScreenSize.from({ mm: 10 });
      expect(screenSize.toCentimeters()).toEqual(1);
    });
  });

  describe("Conversions with Mixed Units Summation", () => {
    it("should convert from all units to all other possible units", () => {
      const screenSize = ScreenSize.from({
        inches: 1,
        points: 72,
        centimeters: 2.54,
        millimeters: 25.4,
        picas: 6,
        pixels: 72,
        pt: 72,
        px: 72,
        in: 1,
        cm: 2.54,
        mm: 25.4,
        pc: 6,
      });

      expect(screenSize.toInches()).toEqual(12);
      expect(screenSize.toPoints()).toEqual(864);
      expect(screenSize.toCentimeters()).toEqual(30.48);
      expect(screenSize.toMillimeters()).toEqual(304.8);
      expect(screenSize.toPicas()).toEqual(72);
      expect(screenSize.toPixels()).toEqual(864);
    });
  });

  describe("Validation and Error Handling", () => {
    it("should throw an error with invalid keys", () => {
      expect(() => ScreenSize.from({ invalid: 10 } as any)).toThrow(
        "Invalid key: invalid"
      );
    });

    it("should throw an error if no units are provided", () => {
      expect(() => ScreenSize.from({})).toThrow(
        "At least one unit must be specified."
      );
    });

    it("should throw an error when a negative value is provided", () => {
      expect(() => ScreenSize.from({ inches: -1 })).toThrow(
        "Invalid value for inches: cannot be negative"
      );
    });

    it("should throw an error when a non-number value is provided", () => {
      expect(() => ScreenSize.from({ inches: "test" as any })).toThrow(
        "Invalid value for inches: must be a number"
      );
    });

    it("should throw an error when all units are zero", () => {
      const screenSize = ScreenSize.from({
        inches: 0,
        points: 0,
        centimeters: 0,
        millimeters: 0,
        picas: 0,
        pixels: 0,
        pt: 0,
        px: 0,
        in: 0,
        cm: 0,
        mm: 0,
        pc: 0,
      });
      expect(() => screenSize.toInches()).toThrow(
        "No units available for conversion."
      );
    });
  });

  describe("Precision Handling", () => {
    it("should handle floating-point precision correctly in conversions", () => {
      const screenSize = ScreenSize.from({ centimeters: 1.27 });
      expect(screenSize.toInches()).toBeCloseTo(0.5, 6);
    });

    it("should handle extremely small values accurately", () => {
      const screenSize = ScreenSize.from({ centimeters: 0.000254 });
      expect(screenSize.toInches()).toBeCloseTo(0.0001, 6);
    });
  });

  describe("Internal Conversion Logic", () => {
    it("should correctly convert inches to centimeters", () => {
      const screenSize = ScreenSize.fromInches(1);
      const conversion = screenSize["convert"](1, "in", "cm");
      expect(conversion).toEqual(2.54);
    });

    it("should correctly convert centimeters to inches", () => {
      const screenSize = ScreenSize.fromCentimeters(2.54);
      const conversion = screenSize["convert"](2.54, "cm", "in");
      expect(conversion).toEqual(1);
    });

    it("should correctly convert pixels to inches", () => {
      const screenSize = ScreenSize.fromPixels(72);
      const conversion = screenSize["convert"](72, "px", "in");
      expect(conversion).toEqual(1);
    });

    it("should throw an error for invalid fromUnit in conversion", () => {
      const screenSize = ScreenSize.fromInches(1);
      expect(() =>
        screenSize["convert"](1, "invalidUnit" as any, "in")
      ).toThrow("Invalid 'from' unit: invalidUnit");
    });

    it("should throw an error for invalid toUnit in conversion", () => {
      const screenSize = ScreenSize.fromInches(1);
      expect(() =>
        screenSize["convert"](1, "in", "invalidUnit" as any)
      ).toThrow("Invalid 'to' unit: invalidUnit");
    });
  });
});
