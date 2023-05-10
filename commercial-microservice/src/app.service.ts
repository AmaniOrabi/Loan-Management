import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMERCIAL-RISK-COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  processLoan(id: string) {
    const primaryScore = Math.random();
    this.communicationClient.emit('primary_score', {
      loanId: id,
      primaryScore: primaryScore,
    });
    return primaryScore;
  }
}
