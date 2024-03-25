import {
  calculateEquationResult,
  Operator,
} from "@/utils/custom-equation-utils";

// Addition
describe("Calculate Equation Results - Addition", () => {
  it("should correctly add numbers (1 + 2 + 3 = 6)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 1 },
        { label: "val 2", operator: Operator.Addition, value: 2 },
        { label: "val 3", operator: Operator.Addition, value: 3 },
      ])
    ).toBe(6);
  });
  it("should correctly add negative numbers (-2 + -3 + -5 = -10)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: -2 },
        { label: "val 2", operator: Operator.Addition, value: -3 },
        { label: "val 3", operator: Operator.Addition, value: -5 },
      ])
    ).toBe(-10);
  });
  it("should correctly add negative & positive numbers (2 + -3 + 5 = 4)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 2 },
        { label: "val 2", operator: Operator.Addition, value: -3 },
        { label: "val 3", operator: Operator.Addition, value: 5 },
      ])
    ).toBe(4);
  });
});

// Addition & Subtraction
describe("Calculate Equation Results - Addition & Subtraction", () => {
  it("should correctly add & subtract numbers (20 + 10 - 5 = 25)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 20 },
        { label: "val 2", operator: Operator.Addition, value: 10 },
        { label: "val 3", operator: Operator.Subtraction, value: 5 },
      ])
    ).toBe(25);
  });
  it("should correctly subtract and add numbers (10 - 5 + 10 = 15)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Subtraction, value: 10 },
        { label: "val 2", operator: Operator.Subtraction, value: 5 },
        { label: "val 3", operator: Operator.Addition, value: 10 },
      ])
    ).toBe(15);
  });
  it("should correctly add, subtract & then add numbers (10 + 5 - 10 + 10 = 15)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 10 },
        { label: "val 2", operator: Operator.Addition, value: 5 },
        { label: "val 3", operator: Operator.Subtraction, value: 10 },
        { label: "val 4", operator: Operator.Addition, value: 10 },
      ])
    ).toBe(15);
  });
  it("should correctly subtract,add, & then subtract numbers (10 - 5 + 10 - 5 = 10)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Subtraction, value: 10 },
        { label: "val 2", operator: Operator.Subtraction, value: 5 },
        { label: "val 3", operator: Operator.Addition, value: 10 },
        { label: "val 4", operator: Operator.Subtraction, value: 5 },
      ])
    ).toBe(10);
  });
});

// Addition & Multiplication
describe("Calculate Equation Results - Addition & Multiplication", () => {
  it("should correctly add & multiply numbers (10 + 5 * 3 = 45)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 10 },
        { label: "val 2", operator: Operator.Addition, value: 5 },
        { label: "val 3", operator: Operator.Multiplication, value: 3 },
      ])
    ).toBe(45);
  });
  it("should correctly multiply & add numbers (10 * 2 + 5 = 25)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 10 },
        { label: "val 2", operator: Operator.Multiplication, value: 2 },
        { label: "val 3", operator: Operator.Addition, value: 5 },
      ])
    ).toBe(25);
  });
  it("should correctly add & multiply number by 0 (10 + 5  * 0 = 0)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 10 },
        { label: "val 2", operator: Operator.Addition, value: 5 },
        { label: "val 3", operator: Operator.Multiplication, value: 0 },
      ])
    ).toBe(0);
  });
  it("should correctly multiply & add number by 0 (10 * 0 + 5 = 5)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 10 },
        { label: "val 2", operator: Operator.Multiplication, value: 0 },
        { label: "val 3", operator: Operator.Addition, value: 5 },
      ])
    ).toBe(5);
  });
});

// Addition & Division
describe("Calculate Equation Results - Addition & Division", () => {
  it("should correctly add & divide numbers (10 + 5 / 3 = 5)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 10 },
        { label: "val 2", operator: Operator.Addition, value: 5 },
        { label: "val 3", operator: Operator.Division, value: 3 },
      ])
    ).toBe(5);
  });
  it("should correctly divide & add numbers (10 / 2 + 5 = 10)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 10 },
        { label: "val 2", operator: Operator.Division, value: 2 },
        { label: "val 3", operator: Operator.Addition, value: 5 },
      ])
    ).toBe(10);
  });
  it("should correctly add & divide number by 0 (10 + 5 / 0 = 0)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 10 },
        { label: "val 2", operator: Operator.Addition, value: 5 },
        { label: "val 3", operator: Operator.Division, value: 0 },
      ])
    ).toBe(0);
  });
  it("should correctly divide & add number by 0 (10 / 0 + 5 = 5)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 10 },
        { label: "val 2", operator: Operator.Division, value: 0 },
        { label: "val 3", operator: Operator.Addition, value: 5 },
      ])
    ).toBe(5);
  });
});
