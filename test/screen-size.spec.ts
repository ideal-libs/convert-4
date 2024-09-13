import { ScreenSize } from "../packages";

describe("ScreenSize Tests", () => {
  describe("Abbreviated Units", () => {
    it("fromPoints toInches", () => {
      const screenSize = ScreenSize.fromPoints(72);
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
    it("fromInches toCentimeters", () => {
      const screenSize = ScreenSize.fromInches(1);
      expect(screenSize.toCentimeters()).toEqual(2.54);
    });
    it("fromMillimeters toCentimeters", () => {
      const screenSize = ScreenSize.fromMillimeters(10);
      expect(screenSize.toCentimeters()).toEqual(1);
    });
    it("fromPicas toInches", () => {
      const screenSize = ScreenSize.fromPicas(6);
      expect(screenSize.toInches()).toEqual(1);
    });
  });

  describe("Full Unit Names", () => {
    it("fromPoints toInches using full names", () => {
      const screenSize = ScreenSize.from({ points: 72 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromInches toPoints using full names", () => {
      const screenSize = ScreenSize.from({ inches: 1 });
      expect(screenSize.toPoints()).toEqual(72);
    });
    it("fromCentimeters toInches using full names", () => {
      const screenSize = ScreenSize.from({ centimeters: 2.54 });
      expect(screenSize.toInches()).toEqual(1);
    });
    it("fromInches toCentimeters using full names", () => {
      const screenSize = ScreenSize.from({ inches: 1 });
      expect(screenSize.toCentimeters()).toEqual(2.54);
    });
    it("fromMillimeters toCentimeters using full names", () => {
      const screenSize = ScreenSize.from({ millimeters: 10 });
      expect(screenSize.toCentimeters()).toEqual(1);
    });
    it("fromPicas toInches using full names", () => {
      const screenSize = ScreenSize.from({ picas: 6 });
      expect(screenSize.toInches()).toEqual(1);
    });
  });

  describe("Mixed Units", () => {
    it("fromInches and Points mixed", () => {
      const screenSize = ScreenSize.from({ inches: 1, points: 72 });
      expect(screenSize.toInches()).toEqual(2);
    });
    it("fromCentimeters and Pixels mixed", () => {
      const screenSize = ScreenSize.from({ centimeters: 2.54, pixels: 72 });
      expect(screenSize.toInches()).toEqual(2);
    });
  });

  it("should throw an error with invalid keys", () => {
    expect(() => ScreenSize.from({ invalid: 10 } as any)).toThrow(
      "Invalid key: invalid"
    );
  });
});
