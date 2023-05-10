import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { Loan } from './models/loan.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @EventPattern('user_loan')
  receiveLoan(loan: Loan) {
    return this.appService.processLoan(loan.id);
  }
}
