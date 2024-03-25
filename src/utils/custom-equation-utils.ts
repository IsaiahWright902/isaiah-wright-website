import { number, string, z } from "zod";
import { evaluate } from "mathjs";
export const createEquationResultValidator = z.object({
  label: z.string().min(1).max(255),
  value: z.number().default(0),
});

export const createEquationItemsValidator = z.object({
  label: z.string().min(1).max(255),
  value: z.number().default(0),
  operator: z.number().default(5),
});

export const createEquationValidator = z.object({
  name: z.string().min(1).max(255),
  resultLabel: z.string().min(1).max(255),
  items: z.array(createEquationItemsValidator),
});

export type CreateEquationDTO = z.infer<typeof createEquationValidator>;

export enum Operator {
  Addition = 1,
  Subtraction = 2,
  Multiplication = 3,
  Division = 4,
}

export type CustomEquation = {
  id: number;
  name: string;
  items: EquationItem[];
  result: EquationResult;
};

export type EquationResult = {
  value: number;
  label: string;
};

export type EquationItem = {
  label: string;
  value: number;
  operator: Operator;
};

export function getOperatorDisplay(operator: Operator) {
  switch (operator) {
    case Operator.Addition:
      return "(+)";
    case Operator.Subtraction:
      return "(-)";
    case Operator.Multiplication:
      return "(*)";
    case Operator.Division:
      return "(/)";
    default:
      return "Error";
  }
}

export function getOperator(operator: Operator) {
  switch (operator) {
    case Operator.Addition:
      return "+";
    case Operator.Subtraction:
      return "-";
    case Operator.Multiplication:
      return "*";
    case Operator.Division:
      return "/";
    default:
      return "Error";
  }
}

export function calculateEquationResult(items: EquationItem[]) {
  // Initialize the accumulator with the value of the first item
  let total = items.length > 0 ? items[0].value : 0;

  // Start iteration from the second item
  for (let i = 1; i < items.length; i++) {
    const item = items[i];
    switch (item.operator) {
      case Operator.Addition:
        total += item.value;
        break;
      case Operator.Subtraction:
        total -= item.value;
        break;
      case Operator.Multiplication:
        total *= item.value;
        break;
      case Operator.Division:
        if (item.value === 0) {
          // Handle division by zero
          total = 0;
          continue;
        }
        total /= item.value;
        break;
      default:
        break;
    }
  }

  // Return 0 if the result is NaN or if there were no items
  return isNaN(total) ? 0 : total;
}

export function TestFunction(a: number, b: number) {
  return a + b;
}
