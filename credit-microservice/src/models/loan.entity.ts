export class Loan {
  id: string;
  amount: number;
  interestRate: number;
  duration: number;
  startDate: Date;
  createdAt: Date;
  status: string;

  constructor(partial: Partial<Loan>) {
    Object.assign(this, partial);
  }
}
