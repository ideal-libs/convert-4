To create documentation for the [`DataSize`](/packages/converters/data-size.ts) class in the [`convert-4`](https://github.com/ideal-libs/convert-4) library, you can follow this structure. This documentation can be included in the README file within the [`packages/converters`](/packages/converters) directory or as a separate documentation file in the same directory.

---

# DataSize Class Documentation

## Overview

The [`DataSize`](/packages/converters/data-size.ts) class provides a comprehensive suite of methods for converting between different units of digital data size. It supports conversions between bits, bytes, kilobytes, megabytes, gigabytes, terabytes (using base 10), and kibibytes, mebibytes, gibibytes, tebibytes (using base 2).

## Static Methods

### `from(data: FromDataSize): DataSize`

Creates a new `DataSize` instance from an object specifying various units of data size.

### `fromBits(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of bits.

### `fromBytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of bytes.

### `fromKilobytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of kilobytes (base 10).

### `fromMegabytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of megabytes (base 10).

### `fromGigabytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of gigabytes (base 10).

### `fromTerabytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of terabytes (base 10).

### `fromKibibytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of kibibytes (base 2).

### `fromMebibytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of mebibytes (base 2).

### `fromGibibytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of gibibytes (base 2).

### `fromTebibytes(value: number): DataSize`

Creates a new `DataSize` instance from a specified number of tebibytes (base 2).

## Instance Methods

### `toBits(): number`

Returns the total number of bits.

### `toBytes(): number`

Returns the total number of bytes.

### `toKilobytes(): number`

Returns the total number of kilobytes (base 10).

### `toMegabytes(): number`

Returns the total number of megabytes (base 10).

### `toGigabytes(): number`

Returns the total number of gigabytes (base 10).

### `toTerabytes(): number`

Returns the total number of terabytes (base 10).

### `toKibibytes(): number`

Returns the total number of kibibytes (base 2).

### `toMebibytes(): number`

Returns the total number of mebibytes (base 2).

### `toGibibytes(): number`

Returns the total number of gibibytes (base 2).

### `toTebibytes(): number`

Returns the total number of tebibytes (base 2).

## Interface `FromDataSize`

Defines the accepted data types for creating a `DataSize` instance.

```typescript
export interface FromDataSize {
  b?: number; // Bits
  B?: number; // Bytes
  kB?: number; // Kilobytes (base 10)
  MB?: number; // Megabytes (base 10)
  GB?: number; // Gigabytes (base 10)
  TB?: number; // Terabytes (base 10)
  Kib?: number; // Kibibytes (base 2)
  Mib?: number; // Mebibytes (base 2)
  Gib?: number; // Gibibytes (base 2)
  TiB?: number; // Tebibytes (base 2)
}
```

This documentation provides a comprehensive overview of the [`DataSize`](/packages/converters/data-size.ts) class and its capabilities. It can be expanded or modified as needed to fit the project's documentation standards.

---

The documentation can be added to the README file located at [`packages/converters/README.md`](/packages/converters/README.md) or as a new markdown file in the same directory.
