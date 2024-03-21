import { Operator } from "@/app/custom-equation-builder/page";

export function GetOperatorDisplay(operator: Operator) {
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
