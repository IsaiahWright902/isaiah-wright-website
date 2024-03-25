import {
  Operator,
  calculateEquationResult,
} from "@/utils/custom-equation-utils";

// Subtraction
describe("Calculate Equation Results - Subtraction", () => {
  it("should correctly subtract numbers (20 - 10 - 5 = 5)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Subtraction, value: 20 },
        { label: "val 2", operator: Operator.Subtraction, value: 10 },
        { label: "val 3", operator: Operator.Subtraction, value: 5 },
      ])
    ).toBe(5);
  });
});

// Subtraction & Division
describe("Calculate Equation Results - Subtraction & Division", () => {
  it("should correctly subtract & divide numbers (20 - 10 / 2 = 5)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Subtraction, value: 20 },
        { label: "val 2", operator: Operator.Subtraction, value: 10 },
        { label: "val 3", operator: Operator.Division, value: 2 },
      ])
    ).toBe(5);
  });
  it("should correctly divide & subtract numbers (20 / 2 - 5 =  5)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 20 },
        { label: "val 2", operator: Operator.Division, value: 2 },
        { label: "val 3", operator: Operator.Subtraction, value: 5 },
      ])
    ).toBe(5);
  });
  it("should correctly subtract, divide & then subtract numbers (25 - 5 / 2 - 5 = 5)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Subtraction, value: 25 },
        { label: "val 2", operator: Operator.Subtraction, value: 5 },
        { label: "val 3", operator: Operator.Division, value: 2 },
        { label: "val 4", operator: Operator.Subtraction, value: 5 },
      ])
    ).toBe(5);
  });
  it("should correctly divide, subtract, & then divide numbers (40 / 2 - 10  / 2 = 5)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 40 },
        { label: "val 2", operator: Operator.Division, value: 2 },
        { label: "val 3", operator: Operator.Subtraction, value: 10 },
        { label: "val 4", operator: Operator.Division, value: 2 },
      ])
    ).toBe(5);
  });
});

// Subtraction & Multiplication
describe("Calculate Equation Results - Subtraction & Multiplication", () => {
  it("should correctly subtract & multiply numbers (20 - 10 * 2 = 20)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Subtraction, value: 20 },
        { label: "val 2", operator: Operator.Subtraction, value: 10 },
        { label: "val 3", operator: Operator.Multiplication, value: 2 },
      ])
    ).toBe(20);
  });
  it("should correctly multiply & subtract numbers (20 * 2 - 5 = 35)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 20 },
        { label: "val 2", operator: Operator.Multiplication, value: 2 },
        { label: "val 3", operator: Operator.Subtraction, value: 5 },
      ])
    ).toBe(35);
  });
  it("should correctly subtract, multiply & then subtract numbers (25 - 5 * 2 - 5 = 35)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Subtraction, value: 25 },
        { label: "val 2", operator: Operator.Subtraction, value: 5 },
        { label: "val 3", operator: Operator.Multiplication, value: 2 },
        { label: "val 4", operator: Operator.Subtraction, value: 5 },
      ])
    ).toBe(35);
  });
  it("should correctly multiply, subtract, & then multiply numbers (40 * 2 - 10  * 2 = 140)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 40 },
        { label: "val 2", operator: Operator.Multiplication, value: 2 },
        { label: "val 3", operator: Operator.Subtraction, value: 10 },
        { label: "val 4", operator: Operator.Multiplication, value: 2 },
      ])
    ).toBe(140);
  });
});
