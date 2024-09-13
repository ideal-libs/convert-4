class Temperature {
  private value: number;
  private scale: string;

  private constructor(value: number, scale: string) {
    this.value = value;
    this.scale = scale;
  }

  static fromCelsius(value: number): Temperature {
    return new Temperature(value, "C");
  }

  static fromFahrenheit(value: number): Temperature {
    return new Temperature(value, "F");
  }

  static fromKelvin(value: number): Temperature {
    return new Temperature(value, "K");
  }

  static fromRankine(value: number): Temperature {
    return new Temperature(value, "R");
  }

  static fromReaumur(value: number): Temperature {
    return new Temperature(value, "Re");
  }

  toCelsius(): number {
    switch (this.scale) {
      case "C":
        return this.value;
      case "F":
        return (this.value - 32) * (5 / 9);
      case "K":
        return this.value - 273.15;
      case "R":
        return (this.value - 491.67) * (5 / 9);
      case "Re":
        return this.value * (5 / 4);
      default:
        throw new Error(`Unknown scale: ${this.scale}`);
    }
  }

  toFahrenheit(): number {
    switch (this.scale) {
      case "C":
        return this.value * (9 / 5) + 32;
      case "F":
        return this.value;
      case "K":
        return (this.value - 273.15) * (9 / 5) + 32;
      case "R":
        return this.value - 459.67;
      case "Re":
        return this.value * (9 / 4) + 32;
      default:
        throw new Error(`Unknown scale: ${this.scale}`);
    }
  }

  toKelvin(): number {
    switch (this.scale) {
      case "C":
        return this.value + 273.15;
      case "F":
        return (this.value - 32) * (5 / 9) + 273.15;
      case "K":
        return this.value;
      case "R":
        return this.value * (5 / 9);
      case "Re":
        return this.value * (5 / 4) + 273.15;
      default:
        throw new Error(`Unknown scale: ${this.scale}`);
    }
  }

  toRankine(): number {
    switch (this.scale) {
      case "C":
        return (this.value + 273.15) * (9 / 5);
      case "F":
        return this.value + 459.67;
      case "K":
        return this.value * (9 / 5);
      case "R":
        return this.value;
      case "Re":
        return this.value * (9 / 4) + 491.67;
      default:
        throw new Error(`Unknown scale: ${this.scale}`);
    }
  }

  toReaumur(): number {
    switch (this.scale) {
      case "C":
        return this.value * (4 / 5);
      case "F":
        return (this.value - 32) * (4 / 9);
      case "K":
        return (this.value - 273.15) * (4 / 5);
      case "R":
        return (this.value - 491.67) * (4 / 9);
      case "Re":
        return this.value;
      default:
        throw new Error(`Unknown scale: ${this.scale}`);
    }
  }

  toString(): string {
    return `${this.value}°${this.scale}`;
  }
}

// Example usage
const tempC = Temperature.fromCelsius(25);
console.log(tempC.toFahrenheit()); // 77
console.log(tempC.toKelvin()); // 298.15
console.log(tempC.toRankine()); // 536.67
console.log(tempC.toReaumur()); // 20
