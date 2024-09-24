export type FromScreenSize = {
  pt: number;
  px: number;
  in: number;
  cm: number;
  mm: number;
  pc: number;
  picas: number;
  points: number;
  pixels: number;
  inches: number;
  centimeters: number;
  millimeters: number;
};

export type OptionalFromScreenSize = Partial<FromScreenSize>;

export class ScreenSize {
  static readonly CM_PER_INCH = 2.54;
  static readonly MM_PER_INCH = 25.4;
  static readonly PICAS_PER_INCH = 6;
  static readonly POINTS_PER_INCH = 72;
  static readonly PIXELS_PER_INCH = 72;

  private measure: FromScreenSize;

  private validation(measure: OptionalFromScreenSize) {
    const keys = Object.keys(measure);
    const validKeys = [
      "pt",
      "px",
      "in",
      "cm",
      "mm",
      "pc",
      "picas",
      "points",
      "pixels",
      "inches",
      "centimeters",
      "millimeters",
    ];

    keys.forEach((key) => {
      if (!validKeys.includes(key)) {
        throw new Error(`Invalid key: ${key}`);
      }

      if (typeof measure[key as keyof OptionalFromScreenSize] !== "number") {
        throw new Error(`Invalid value for ${key}: must be a number`);
      }

      if (measure[key as keyof OptionalFromScreenSize]! < 0) {
        throw new Error(`Invalid value for ${key}: cannot be negative`);
      }
    });

    if (keys.length === 0) {
      throw new Error("At least one unit must be specified.");
    }
  }

  private constructor(measure: OptionalFromScreenSize) {
    this.validation(measure);
    this.measure = {
      pc: measure.pc ?? 0,
      pt: measure.pt ?? 0,
      px: measure.px ?? 0,
      in: measure.in ?? 0,
      cm: measure.cm ?? 0,
      mm: measure.mm ?? 0,
      picas: measure.picas ?? 0,
      pixels: measure.pixels ?? 0,
      points: measure.points ?? 0,
      inches: measure.inches ?? 0,
      millimeters: measure.millimeters ?? 0,
      centimeters: measure.centimeters ?? 0,
    };
  }

  static from(measure: OptionalFromScreenSize) {
    return new ScreenSize(measure);
  }

  static fromPoints(value: number): ScreenSize {
    return new ScreenSize({ pt: value });
  }

  static fromPixels(value: number): ScreenSize {
    return new ScreenSize({ px: value });
  }

  static fromInches(value: number): ScreenSize {
    return new ScreenSize({ in: value });
  }

  static fromCentimeters(value: number): ScreenSize {
    return new ScreenSize({ cm: value });
  }

  static fromMillimeters(value: number): ScreenSize {
    return new ScreenSize({ mm: value });
  }

  static fromPicas(value: number): ScreenSize {
    return new ScreenSize({ pc: value });
  }

  private convert(
    value: number,
    fromUnit: keyof FromScreenSize,
    toUnit: keyof FromScreenSize
  ): number {
    const conversionRates: Partial<Record<keyof FromScreenSize, number>> = {
      in: 1,
      inches: 1,
      mm: ScreenSize.MM_PER_INCH,
      cm: ScreenSize.CM_PER_INCH,
      pc: ScreenSize.PICAS_PER_INCH,
      pt: ScreenSize.POINTS_PER_INCH,
      px: ScreenSize.PIXELS_PER_INCH,
      picas: ScreenSize.PICAS_PER_INCH,
      pixels: ScreenSize.PIXELS_PER_INCH,
      points: ScreenSize.POINTS_PER_INCH,
      millimeters: ScreenSize.MM_PER_INCH,
      centimeters: ScreenSize.CM_PER_INCH,
    };

    if (!(fromUnit in conversionRates)) {
      throw new Error(`Invalid 'from' unit: ${fromUnit}`);
    }

    if (!(toUnit in conversionRates)) {
      throw new Error(`Invalid 'to' unit: ${toUnit}`);
    }

    const fromRate = conversionRates[fromUnit] as number;
    const toRate = conversionRates[toUnit] as number;

    return (value / fromRate) * toRate;
  }

  private toUnit(unit: keyof FromScreenSize): number {
    const fromUnits = Object.keys(this.measure).filter(
      (key) => this.measure[key as keyof FromScreenSize] > 0
    ) as Array<keyof FromScreenSize>;

    if (fromUnits.length === 0) {
      throw new Error("No units available for conversion.");
    }

    const totalValueInTargetUnit = fromUnits.reduce((total, fromUnit) => {
      const value = this.measure[fromUnit];
      return total + this.convert(value, fromUnit, unit);
    }, 0);

    return parseFloat(totalValueInTargetUnit.toFixed(6));
  }

  toPoints(): number {
    return this.toUnit("pt");
  }

  toPixels(): number {
    return this.toUnit("px");
  }

  toInches(): number {
    return this.toUnit("in");
  }

  toCentimeters(): number {
    return this.toUnit("cm");
  }

  toMillimeters(): number {
    return this.toUnit("mm");
  }

  toPicas(): number {
    return this.toUnit("pc");
  }
}
