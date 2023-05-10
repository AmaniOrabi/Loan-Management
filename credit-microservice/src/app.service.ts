import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoanDecision } from './models/loanDecision.entity';
import { Loan } from './models/loan.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMERCIAL-RISK-COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  processLoan(loan: Loan): LoanDecision {
    const creditScore = this.calculateCreditScore(loan);

    // Determine the loan decision based on the credit score
    const loanDecision: LoanDecision = {
      loan,
      creditScore,
      decision: creditScore >= 700 ? 'Approved' : 'Rejected',
    };

    this.communicationClient.emit('loan_processed', loanDecision);

    return loanDecision;
  }

  calculateCreditScore(loan: Loan): number {
    let creditScore = 0;
    //this is just an example for the calculation of the credit score and have no relationship to what actually happends in an actual bank :)

    if (loan.amount >= 5000) {
      creditScore += 50;
    }

    if (loan.duration <= 12) {
      creditScore += 30;
    }
    return creditScore;
  }
}
