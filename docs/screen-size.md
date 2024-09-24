## Documentation for `ScreenSize` Class

The `ScreenSize` class allows for easy conversion between different units of screen measurement (inches, points, pixels, centimeters, etc.). This document outlines the usage, functionality, and basic tests to illustrate how to interact with the class.

### Key Features
- Supports conversions between various units: inches, points, pixels, centimeters, millimeters, picas, etc.
- Provides static constructors to initialize the class using any unit.
- Allows converting to different units once the `ScreenSize` object is created.
- Ensures valid inputs and throws appropriate errors for invalid cases.
- Handles both full and abbreviated unit names.

### Importing the Class
```typescript
import { ScreenSize } from "convert-4";
```

### Creating a `ScreenSize` Object

You can create a `ScreenSize` instance using one of the static `from` methods. These methods initialize the class with a value for a particular unit:

#### Full Unit Name
```typescript
const screenSize = ScreenSize.from({ centimeters: 2.54 });
```

#### Abbreviated Unit Name
```typescript
const screenSize = ScreenSize.from({ cm: 2.54 });
```

You can also use specific factory methods for each unit:

```typescript
const screenSizeFromInches = ScreenSize.fromInches(1);  // Create ScreenSize from inches
const screenSizeFromPoints = ScreenSize.fromPoints(72); // Create ScreenSize from points
```

### Available Static `from` Methods
- `ScreenSize.from(data: OptionalFromScreenSize)`: Create a `ScreenSize` object from a variety of unit inputs.
- `ScreenSize.fromPoints(value: number)`: Create a `ScreenSize` object from a point value.
- `ScreenSize.fromPixels(value: number)`: Create a `ScreenSize` object from a pixel value.
- `ScreenSize.fromInches(value: number)`: Create a `ScreenSize` object from an inch value.
- `ScreenSize.fromCentimeters(value: number)`: Create a `ScreenSize` object from a centimeter value.
- `ScreenSize.fromMillimeters(value: number)`: Create a `ScreenSize` object from a millimeter value.
- `ScreenSize.fromPicas(value: number)`: Create a `ScreenSize` object from a pica value.

### Conversion Methods
Once a `ScreenSize` object is created, you can convert between units using the following methods:

- `toPoints()`: Convert the stored value(s) to points.
- `toPixels()`: Convert the stored value(s) to pixels.
- `toInches()`: Convert the stored value(s) to inches.
- `toCentimeters()`: Convert the stored value(s) to centimeters.
- `toMillimeters()`: Convert the stored value(s) to millimeters.
- `toPicas()`: Convert the stored value(s) to picas.

### Example Usage

```typescript
// Convert from points to inches
const screenSize = ScreenSize.fromPoints(72);
console.log(screenSize.toInches()); // Output: 1

// Convert from centimeters to inches
const screenSizeInCm = ScreenSize.fromCentimeters(2.54);
console.log(screenSizeInCm.toInches()); // Output: 1
```

### Error Handling
The `ScreenSize` class will throw errors if invalid input is provided. For example:

- **Invalid key**: If you provide an unrecognized unit:
  ```typescript
  ScreenSize.from({ invalidUnit: 10 });  // Throws: Invalid key: invalidUnit
  ```
  
- **Negative values**: Units cannot be negative:
  ```typescript
  ScreenSize.from({ inches: -1 });  // Throws: Invalid value for inches: cannot be negative
  ```

- **Non-numeric values**: The class expects numeric inputs:
  ```typescript
  ScreenSize.from({ inches: "test" as any });  // Throws: Invalid value for inches: must be a number
  ```

- **No units specified**: If no units are provided, an error will be thrown:
  ```typescript
  ScreenSize.from({});  // Throws: At least one unit must be specified.
  ```

### Mixed Unit Conversions

You can initialize `ScreenSize` with multiple units, and the conversions will sum them appropriately:

```typescript
const screenSize = ScreenSize.from({
  inches: 1,
  points: 72,
  centimeters: 2.54,
});
console.log(screenSize.toInches()); // Output: 3
console.log(screenSize.toPoints()); // Output: 216
```

### Testing

#### Unit Conversion Tests
```typescript
describe("ScreenSize Tests", () => {
  it("fromPoints toInches", () => {
    const screenSize = ScreenSize.fromPoints(72);
    expect(screenSize.toInches()).toEqual(1);
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
```

#### Error Handling Tests
```typescript
describe("Validation and Error Handling", () => {
  it("should throw an error with invalid keys", () => {
    expect(() => ScreenSize.from({ invalid: 10 })).toThrow("Invalid key: invalid");
  });

  it("should throw an error when a negative value is provided", () => {
    expect(() => ScreenSize.from({ inches: -1 })).toThrow("Invalid value for inches: cannot be negative");
  });

  it("should throw an error when no units are provided", () => {
    expect(() => ScreenSize.from({})).toThrow("At least one unit must be specified.");
  });
});
```

This should give you a solid foundation for understanding and using the `ScreenSize` class!