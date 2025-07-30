export enum LoanType {
    Standard = 'Standard',
    InterestOnly = 'InterestOnly',
    Offset = 'Offset',
}

export interface Addon {
    type: string;
    value?: number;
}

export interface CalculateMonthlyPaymentRequest {
    loanAmount: number;
    annualInterestRate: number;
    termYears: number;
    type: LoanType;
    offsetAmount: number;
    addons: (string | Addon)[];
}
