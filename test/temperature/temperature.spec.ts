import { Temperature } from "../../packages";

describe("Temperature Conversion Tests", () => {
  describe("fromCelsius", () => {
    it("should convert Celsius to Fahrenheit", () => {
      const temp = Temperature.fromCelsius(25);
      expect(temp.toFahrenheit()).toBeCloseTo(77);
    });

    it("should convert Celsius to Kelvin", () => {
      const temp = Temperature.fromCelsius(25);
      expect(temp.toKelvin()).toBeCloseTo(298.15);
    });

    it("should convert Celsius to Rankine", () => {
      const temp = Temperature.fromCelsius(25);
      expect(temp.toRankine()).toBeCloseTo(536.67);
    });

    it("should convert Celsius to Reaumur", () => {
      const temp = Temperature.fromCelsius(25);
      expect(temp.toReaumur()).toBeCloseTo(20);
    });
  });

  describe("fromFahrenheit", () => {
    it("should convert Fahrenheit to Celsius", () => {
      const temp = Temperature.fromFahrenheit(77);
      expect(temp.toCelsius()).toBeCloseTo(25);
    });

    it("should convert Fahrenheit to Kelvin", () => {
      const temp = Temperature.fromFahrenheit(77);
      expect(temp.toKelvin()).toBeCloseTo(298.15);
    });

    it("should convert Fahrenheit to Rankine", () => {
      const temp = Temperature.fromFahrenheit(77);
      expect(temp.toRankine()).toBeCloseTo(536.67);
    });

    it("should convert Fahrenheit to Reaumur", () => {
      const temp = Temperature.fromFahrenheit(77);
      expect(temp.toReaumur()).toBeCloseTo(20);
    });
  });

  describe("fromKelvin", () => {
    it("should convert Kelvin to Celsius", () => {
      const temp = Temperature.fromKelvin(298.15);
      expect(temp.toCelsius()).toBeCloseTo(25);
    });

    it("should convert Kelvin to Fahrenheit", () => {
      const temp = Temperature.fromKelvin(298.15);
      expect(temp.toFahrenheit()).toBeCloseTo(77);
    });

    it("should convert Kelvin to Rankine", () => {
      const temp = Temperature.fromKelvin(298.15);
      expect(temp.toRankine()).toBeCloseTo(536.67);
    });

    it("should convert Kelvin to Reaumur", () => {
      const temp = Temperature.fromKelvin(298.15);
      expect(temp.toReaumur()).toBeCloseTo(20);
    });
  });

  describe("fromRankine", () => {
    it("should convert Rankine to Celsius", () => {
      const temp = Temperature.fromRankine(536.67);
      expect(temp.toCelsius()).toBeCloseTo(25);
    });

    it("should convert Rankine to Fahrenheit", () => {
      const temp = Temperature.fromRankine(536.67);
      expect(temp.toFahrenheit()).toBeCloseTo(77);
    });

    it("should convert Rankine to Kelvin", () => {
      const temp = Temperature.fromRankine(536.67);
      expect(temp.toKelvin()).toBeCloseTo(298.15);
    });

    it("should convert Rankine to Reaumur", () => {
      const temp = Temperature.fromRankine(536.67);
      expect(temp.toReaumur()).toBeCloseTo(20);
    });
  });

  describe("fromReaumur", () => {
    it("should convert Reaumur to Celsius", () => {
      const temp = Temperature.fromReaumur(20);
      expect(temp.toCelsius()).toBeCloseTo(25);
    });

    it("should convert Reaumur to Fahrenheit", () => {
      const temp = Temperature.fromReaumur(20);
      expect(temp.toFahrenheit()).toBeCloseTo(77);
    });

    it("should convert Reaumur to Kelvin", () => {
      const temp = Temperature.fromReaumur(20);
      expect(temp.toKelvin()).toBeCloseTo(298.15);
    });

    it("should convert Reaumur to Rankine", () => {
      const temp = Temperature.fromReaumur(20);
      expect(temp.toRankine()).toBeCloseTo(536.67);
    });
  });
});
