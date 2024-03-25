import {
  Operator,
  calculateEquationResult,
  getOperator,
} from "@/utils/custom-equation-utils";

describe("Calculate Equation Results - Base", () => {
  it("should return 0 from an empty array", () => {
    expect(calculateEquationResult([])).toBe(0);
  });
  it("should return base number when only one value is provided - Addition (1 + ? = 1) ", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Addition, value: 1 },
      ])
    ).toBe(1);
  });
  it("should return base number when only one value is provided - Subtraction (1 - ? = 1) ", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Subtraction, value: 1 },
      ])
    ).toBe(1);
  });
  it("should return base number when only one value is provided - Division (1 / ? = 1) ", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 1 },
      ])
    ).toBe(1);
  });
  it("should return base number when only one value is provided - Addition (1 * ? = 1) ", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 1 },
      ])
    ).toBe(1);
  });
});

describe("Calculate Equation Results - Get Operator Working as Expected", () => {
  it("should return +", () => {
    expect(getOperator(Operator.Addition)).toBe("+");
  });
  it("should return -", () => {
    expect(getOperator(Operator.Subtraction)).toBe("-");
  });
  it("should return *", () => {
    expect(getOperator(Operator.Multiplication)).toBe("*");
  });
  it("should return /", () => {
    expect(getOperator(Operator.Division)).toBe("/");
  });
});
