import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Loan } from './models/loan.entity';
import { RiskEvaluation } from './models/riskEvaluation.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMERCIAL-RISK-COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  evaluateRisk(loan: Loan): RiskEvaluation {
    // Perform risk evaluation logic based on loan  details
    const riskScore = this.calculateRiskScore(loan);

    const riskEvaluation: RiskEvaluation = {
      loan,
      riskScore,
      result: riskScore >= 70 ? 'High Risk' : 'Low Risk',
    };

    this.communicationClient.emit('risk_evaluation', riskEvaluation);

    return riskEvaluation;
  }

  calculateRiskScore(loan: Loan): number {
    // Perform the risk score calculation based on the loan  details
    // ...

    // Return the calculated risk score
    return Math.random();
  }
}
