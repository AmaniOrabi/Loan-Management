import { Loan } from './loan.entity';

export interface LoanDecision {
  loan: Loan;
  creditScore: number;
  decision: string;
}
