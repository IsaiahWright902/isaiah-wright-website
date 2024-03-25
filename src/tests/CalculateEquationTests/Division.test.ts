import {
  calculateEquationResult,
  Operator,
} from "@/utils/custom-equation-utils";

// Division
describe("Calculate Equation Results - Division", () => {
  it("should correctly Divide numbers (20 / 5 = 4)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 20 },
        { label: "val 2", operator: Operator.Division, value: 5 },
      ])
    ).toBe(4);
  });
  it("should correctly Divide number by 1 (20 / 1 = 20)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 20 },
        { label: "val 2", operator: Operator.Division, value: 1 },
      ])
    ).toBe(20);
  });
  it("should correctly Divide number by 0 (20 / 0 = 0)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 20 },
        { label: "val 2", operator: Operator.Division, value: 0 },
      ])
    ).toBe(0);
  });
});

// Division & Multiplication
describe("Calculate Equation Results - Division & Multiplication", () => {
  it("should correctly divide & multiply numbers (20 / 2 * 5 = 50)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 20 },
        { label: "val 2", operator: Operator.Division, value: 2 },
        { label: "val 3", operator: Operator.Multiplication, value: 5 },
      ])
    ).toBe(50);
  });
  it("should correctly multiply & divide numbers (20 * 2 / 10 = 4)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 20 },
        { label: "val 2", operator: Operator.Multiplication, value: 2 },
        { label: "val 3", operator: Operator.Division, value: 10 },
      ])
    ).toBe(4);
  });
  it("should correctly multiply, divide & then multiply numbers (25 * 2 / 5 * 2 = 20)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Multiplication, value: 25 },
        { label: "val 2", operator: Operator.Multiplication, value: 2 },
        { label: "val 3", operator: Operator.Division, value: 5 },
        { label: "val 4", operator: Operator.Multiplication, value: 2 },
      ])
    ).toBe(20);
  });
  it("should correctly divide, multiply, & then divide numbers (40 / 2 * 10 / 2 = 100)", () => {
    expect(
      calculateEquationResult([
        { label: "val 1", operator: Operator.Division, value: 40 },
        { label: "val 2", operator: Operator.Division, value: 2 },
        { label: "val 3", operator: Operator.Multiplication, value: 10 },
        { label: "val 4", operator: Operator.Division, value: 2 },
      ])
    ).toBe(100);
  });
});
