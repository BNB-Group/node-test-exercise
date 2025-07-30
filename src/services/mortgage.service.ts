import { Addon, LoanType } from '../domain/types';

export function calculate(loanAmount: number, annualInterestRate: number, termYears: number, type: LoanType, offsetAmount: number, addons: (string | Addon)[]): number {
  // TODO: Implement the actual mortgage calculation logic.
  return 0;
}