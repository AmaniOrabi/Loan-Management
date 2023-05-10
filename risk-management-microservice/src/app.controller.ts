import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Loan } from './models/loan.entity';
import { RiskEvaluation } from './models/riskEvaluation.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('evaluate')
  evaluateRisk(@Body() loan: Loan): RiskEvaluation {
    return this.appService.evaluateRisk(loan);
  }
}
