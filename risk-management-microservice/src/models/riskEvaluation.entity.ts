import { Loan } from './loan.entity';

export interface RiskEvaluation {
  loan: Loan;
  riskScore: number;
  result: string;
}
