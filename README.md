# convert-4 Documentation

## Overview

`convert-4` is a simple library for converting between units of measurement, focusing on data size conversions. It supports a wide range of units from bits to terabytes, both in base 10 and base 2.

## Installation

To install `convert-4`, run the following command in your terminal:

```sh
npm install convert-4
```

## Usage

Here's a quick example of how to use `convert-4` to convert between different units of data size:

```typescript
import { DataSize } from "convert-4";

// Create a DataSize instance from bytes
const dataSize = DataSize.fromBytes(1000);

// Convert to kilobytes
console.log(dataSize.toKilobytes()); // Output: 1
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

## License

`convert-4` is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.
