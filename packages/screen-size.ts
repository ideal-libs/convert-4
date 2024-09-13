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
  static readonly POINT_PER_INCH = 72;
  static readonly PIXELS_PER_INCH = 72;

  private data: FromScreenSize;

  private validation(data: OptionalFromScreenSize) {
    const keys = Object.keys(data);
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

      if (typeof data[key as keyof OptionalFromScreenSize] !== "number") {
        throw new Error(`Invalid value for ${key}: must be a number`);
      }
    });
  }

  private constructor(data: OptionalFromScreenSize) {
    this.validation(data);
    this.data = {
      pc: data.pc || 0,
      pt: data.pt || 0,
      px: data.px || 0,
      in: data.in || 0,
      cm: data.cm || 0,
      mm: data.mm || 0,
      picas: data.picas || 0,
      pixels: data.pixels || 0,
      points: data.points || 0,
      inches: data.inches || 0,
      millimeters: data.millimeters || 0,
      centimeters: data.centimeters || 0,
    };
  }

  static from(data: OptionalFromScreenSize) {
    return new ScreenSize(data);
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

  calculateSize(divider: number): number {
    const values = {
      in: this.data.in / divider,
      inches: this.data.inches / divider,
      pt: this.data.pt / ScreenSize.POINT_PER_INCH / divider,
      px: this.data.px / ScreenSize.PIXELS_PER_INCH / divider,
      points: this.data.points / ScreenSize.POINT_PER_INCH / divider,
      pixels: this.data.pixels / ScreenSize.PIXELS_PER_INCH / divider,
      mm: this.data.mm / ScreenSize.MM_PER_INCH / divider,
      cm: this.data.cm / ScreenSize.CM_PER_INCH / divider,
      pc: this.data.pc / ScreenSize.PICAS_PER_INCH / divider,
      picas: this.data.picas / ScreenSize.PICAS_PER_INCH / divider,
      millimeters: this.data.millimeters / ScreenSize.MM_PER_INCH / divider,
      centimeters: this.data.centimeters / ScreenSize.CM_PER_INCH / divider,
    };
    return Object.values(values).reduce((acc, curr) => acc + curr, 0);
  }

  toPoints(): number {
    return parseFloat(
      this.calculateSize(1 / ScreenSize.POINT_PER_INCH).toFixed(2)
    );
  }

  toPixels(): number {
    return parseFloat(
      this.calculateSize(1 / ScreenSize.PIXELS_PER_INCH).toFixed(2)
    );
  }

  toInches(): number {
    return parseFloat(this.calculateSize(1).toFixed(2));
  }

  toCentimeters(): number {
    return parseFloat(
      this.calculateSize(1 / ScreenSize.CM_PER_INCH).toFixed(2)
    );
  }

  toMillimeters(): number {
    return parseFloat(
      this.calculateSize(1 / ScreenSize.MM_PER_INCH).toFixed(2)
    );
  }

  toPicas(): number {
    return parseFloat(
      this.calculateSize(1 / ScreenSize.PICAS_PER_INCH).toFixed(2)
    );
  }
}
