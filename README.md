# convert-4 Documentation

## Overview

`convert-4` is a versatile library for converting between various units of measurement, focusing on data size and screen size conversions. It supports a wide range of units, from bits to terabytes, as well as different units of screen dimensions (e.g., inches, pixels, points, and more).

## Installation

To install `convert-4`, run the following command in your terminal:

```sh
npm install convert-4
```

## Usage

Here's a quick example of how to use `convert-4` for both data size and screen size conversions.

### Data Size Example:

```typescript
import { DataSize } from "convert-4";

// Create a DataSize instance from bytes
const dataSize = DataSize.fromBytes(1000);

// Convert to kilobytes
console.log(dataSize.toKilobytes()); // Output: 1
```

### Screen Size Example:

```typescript
import { ScreenSize } from "convert-4";

// Create a ScreenSize instance from inches
const screenSize = ScreenSize.fromInches(1);

// Convert to points
console.log(screenSize.toPoints()); // Output: 72
```

## API Reference

### DataSize Class

#### Static Methods

- `from(data: FromDataSize): DataSize`: Creates a new `DataSize` instance from an object specifying various units of data size.
- `fromBits(value: number): DataSize`: Creates a new `DataSize` instance from a specified number of bits.
- `fromBytes(value: number): DataSize`: Creates a new `DataSize` instance from a specified number of bytes.
- `fromKilobytes(value: number): DataSize`: Creates a new `DataSize` instance from a specified number of kilobytes (base 10).
- `fromMegabytes(value: number): DataSize`: Creates a new `DataSize` instance from a specified number of megabytes (base 10).
- `fromGigabytes(value: number): DataSize`: Creates a new `DataSize` instance from a specified number of gigabytes (base 10).
- `fromTerabytes(value: number): DataSize`: Creates a new `DataSize` instance from a specified number of terabytes (base 10).

For more detailed information, refer to the [`DataSize`](packages/converters/data-size.ts) class documentation in the [`packages/converters/README.md`](packages/converters/README.md) file.

### ScreenSize Class

The `ScreenSize` class provides functionality for converting between various units of screen size, such as inches, pixels, points, picas, centimeters, and millimeters.

#### Static Methods

- `from(data: OptionalFromScreenSize): ScreenSize`: Creates a new `ScreenSize` instance from an object specifying units of screen size.
- `fromInches(value: number): ScreenSize`: Creates a new `ScreenSize` instance from a specified number of inches.
- `fromPixels(value: number): ScreenSize`: Creates a new `ScreenSize` instance from a specified number of pixels.
- `fromPoints(value: number): ScreenSize`: Creates a new `ScreenSize` instance from a specified number of points.
- `fromCentimeters(value: number): ScreenSize`: Creates a new `ScreenSize` instance from a specified number of centimeters.
- `fromMillimeters(value: number): ScreenSize`: Creates a new `ScreenSize` instance from a specified number of millimeters.
- `fromPicas(value: number): ScreenSize`: Creates a new `ScreenSize` instance from a specified number of picas.

For more detailed information, refer to the [`ScreenSize`](doc/screen-size.md) documentation.

## License

`convert-4` is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.
