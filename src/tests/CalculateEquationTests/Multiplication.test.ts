import {
  calculateEquationResult,
  Operator,
} from "@/utils/custom-equation-utils";

// Multiplication
describe("Calculate Equation Results - Multiplication", () => {
  it("should correctly multiply numbers (10 * 5 = 50)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 10 },
        { label: "val 2", operator: Operator.Multiplication, value: 5 },
      ])
    ).toBe(50);
  });
  it("should correctly multiply a positive number with a negative number (10 * -5 = -50)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 10 },
        { label: "val 2", operator: Operator.Multiplication, value: -5 },
      ])
    ).toBe(-50);
  });
  it("should correctly multiply by 0 (10 * 0 = 0)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 10 },
        { label: "val 2", operator: Operator.Multiplication, value: 0 },
      ])
    ).toBe(0);
  });
});
