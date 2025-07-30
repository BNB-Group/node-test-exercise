import { Request, Response } from 'express';
import * as mortgageService from '../services/mortgage.service';
import { CalculateMonthlyPaymentRequest } from '../domain/types';

export function calculateMonthlyPayment(req: Request, res: Response) {
  const { loanAmount, annualInterestRate, termYears, type, offsetAmount, addons } = req.body as CalculateMonthlyPaymentRequest;

  // TODO: Implement validation

  const monthlyPayment = mortgageService.calculate(loanAmount, annualInterestRate, termYears, type, offsetAmount, addons);

  res.json({ monthlyRepayment: monthlyPayment });
}