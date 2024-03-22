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
  let isMultiplicationOnly = items.every(
    (item) => item.operator === Operator.Multiplication
  );

  const total = items.reduce(
    (acc, item) => {
      switch (item.operator) {
        case Operator.Addition:
          return acc + item.value;
        case Operator.Subtraction:
          return acc - item.value;
        case Operator.Multiplication:
          return acc * item.value;
        case Operator.Division:
          return acc / item.value;
        default:
          return acc;
      }
    },
    isMultiplicationOnly ? 1 : 0
  );

  return isNaN(total) ? 0 : total;
}
