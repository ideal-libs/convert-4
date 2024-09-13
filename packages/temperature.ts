export type FromTemperature = {
  C?: number;
  F?: number;
  K?: number;
  R?: number;
  Re?: number;
  Celsius?: number;
  Fahrenheit?: number;
  Kelvin?: number;
  Rankine?: number;
  Reaumur?: number;
};
export class Temperature {
  private data: FromTemperature = {};

  private validation(data: FromTemperature) {
    const keys = Object.keys(data);
    const validKeys = [
      "C",
      "F",
      "K",
      "R",
      "Re",
      "Celsius",
      "Fahrenheit",
      "Kelvin",
      "Rankine",
      "Reaumur",
    ];
    keys.forEach((key) => {
      if (!validKeys.includes(key)) {
        throw new Error(`Invalid key: ${key}`);
      }
    });
  }

  private constructor(data: FromTemperature) {
    this.validation(data);
    if (data.C) this.data.C = data.C;
    if (data.F) this.data.F = data.F;
    if (data.K) this.data.K = data.K;
    if (data.R) this.data.R = data.R;
    if (data.Re) this.data.Re = data.Re;
    if (data.Celsius) this.data.C = data.Celsius;
    if (data.Fahrenheit) this.data.F = data.Fahrenheit;
    if (data.Kelvin) this.data.K = data.Kelvin;
    if (data.Rankine) this.data.R = data.Rankine;
    if (data.Reaumur) this.data.Re = data.Reaumur;
  }

  static fromCelsius(value: number): Temperature {
    return new Temperature({ C: value });
  }

  static fromFahrenheit(value: number): Temperature {
    return new Temperature({ F: value });
  }

  static fromKelvin(value: number): Temperature {
    return new Temperature({ K: value });
  }

  static fromRankine(value: number): Temperature {
    return new Temperature({ R: value });
  }

  static fromReaumur(value: number): Temperature {
    return new Temperature({ Re: value });
  }

  toCelsius(): number {
    const values: FromTemperature = {
      C: this.data.C || 0,
      F: this.data.F ? (this.data.F - 32) * (5 / 9) : 0,
      K: this.data.K ? this.data.K - 273.15 : 0,
      R: this.data.R ? (this.data.R - 491.67) * (5 / 9) : 0,
      Re: this.data.Re ? this.data.Re * (5 / 4) : 0,
      Celsius: this.data.Celsius || 0,
      Fahrenheit: this.data.Fahrenheit ? (this.data.Fahrenheit - 32) * (5 / 9) : 0,
      Kelvin: this.data.Kelvin ? this.data.Kelvin - 273.15 : 0,
      Rankine: this.data.Rankine ? (this.data.Rankine - 491.67) * (5 / 9) : 0,
      Reaumur: this.data.Reaumur ? this.data.Reaumur * (5 / 4) : 0,
    };

    return Object.values(values).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  toFahrenheit(): number {
    const values: FromTemperature = {
      C: this.data.C ? this.data.C * (9 / 5) + 32 : 0,
      F: this.data.F || 0,
      K: this.data.K ? (this.data.K - 273.15) * (9 / 5) + 32 : 0,
      R: this.data.R ? this.data.R - 459.67 : 0,
      Re: this.data.Re ? this.data.Re * (9 / 4) + 32 : 0,
      Celsius: this.data.Celsius ? this.data.Celsius * (9 / 5) + 32 : 0,
      Fahrenheit: this.data.Fahrenheit || 0,
      Kelvin: this.data.Kelvin ? (this.data.Kelvin - 273.15) * (9 / 5) + 32 : 0,
      Rankine: this.data.Rankine ? this.data.Rankine - 459.67 : 0,
      Reaumur: this.data.Reaumur ? this.data.Reaumur * (9 / 4) + 32 : 0,
    };

    return Object.values(values).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  toKelvin(): number {
    const values: FromTemperature = {
      C: this.data.C ? this.data.C + 273.15 : 0,
      F: this.data.F ? (this.data.F - 32) * (5 / 9) + 273.15 : 0,
      K: this.data.K || 0,
      R: this.data.R ? this.data.R * (5 / 9) : 0,
      Re: this.data.Re ? this.data.Re * (5 / 4) + 273.15 : 0,
      Celsius: this.data.Celsius ? this.data.Celsius + 273.15 : 0,
      Fahrenheit: this.data.Fahrenheit ? (this.data.Fahrenheit - 32) * (5 / 9) + 273.15 : 0,
      Kelvin: this.data.Kelvin || 0,
      Rankine: this.data.Rankine ? this.data.Rankine * (5 / 9) : 0,
      Reaumur: this.data.Reaumur ? this.data.Reaumur * (5 / 4) + 273.15 : 0,
    };

    return Object.values(values).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  toRankine(): number {
    const values: FromTemperature = {
      C: this.data.C ? (this.data.C + 273.15) * (9 / 5) : 0,
      F: this.data.F ? this.data.F + 459.67 : 0,
      K: this.data.K ? this.data.K * (9 / 5) : 0,
      R: this.data.R || 0,
      Re: this.data.Re ? this.data.Re * (9 / 4) + 491.67 : 0,
      Celsius: this.data.Celsius ? (this.data.Celsius + 273.15) * (9 / 5) : 0,
      Fahrenheit: this.data.Fahrenheit ? this.data.Fahrenheit + 459.67 : 0,
      Kelvin: this.data.Kelvin ? this.data.Kelvin * (9 / 5) : 0,
      Rankine: this.data.Rankine || 0,
      Reaumur: this.data.Reaumur ? this.data.Reaumur * (9 / 4) + 491.67 : 0,
    };
    return Object.values(values).reduce((acc, curr) => acc + curr, 0);
  }

  toReaumur(): number {
    const values: FromTemperature = {
      C: this.data.C ? this.data.C * (4 / 5) : 0,
      F: this.data.F ? (this.data.F - 32) * (4 / 9) : 0,
      K: this.data.K ? (this.data.K - 273.15) * (4 / 5) : 0,
      R: this.data.R ? (this.data.R - 491.67) * (4 / 9) : 0,
      Re: this.data.Re || 0,
      Celsius: this.data.Celsius ? this.data.Celsius * (4 / 5) : 0,
      Fahrenheit: this.data.Fahrenheit ? (this.data.Fahrenheit - 32) * (4 / 9) : 0,
      Kelvin: this.data.Kelvin ? (this.data.Kelvin - 273.15) * (4 / 5) : 0,
      Rankine: this.data.Rankine ? (this.data.Rankine - 491.67) * (4 / 9) : 0,
      Reaumur: this.data.Reaumur || 0,
    };

    return Object.values(values).reduce((acc, curr) => acc + curr, 0);
  }
}
