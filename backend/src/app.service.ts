import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Loan } from './models/loan.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {
  private loans: Loan[] = [];
  private acceptedLoans: any[] = [];
  private refusedLoans: any[] = ([] = []);

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    private readonly creditServiceCommunicator: ClientProxy,
  ) {}

  getLoans(): Loan[] {
    return this.loans;
  }

  addLoan(loan: Loan) {
    if (loan) {
      loan.status = 'processing';
      loan.id = uuid();
      this.loans.push(loan);
    }
    return loan;
  }

  getLoanById(id: string) {
    return this.loans.find((loan) => loan.id === id);
  }

  handleResult(result: any) {
    if (result.status === 'accepted') {
      this.acceptedLoans.push(result);
    } else {
      this.refusedLoans.push(result);
    }
    return result;
  }
}
