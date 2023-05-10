import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Loan } from './models/loan.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getLoans(): Loan[] {
    return this.appService.getLoans();
  }

  @Get('/:id')
  getLoanById(@Param('id') id: string) {
    return this.appService.getLoanById(id);
  }

  @Post('add')
  addLoan(@Body() loan: Loan) {
    return this.appService.addLoan(loan);
  }

  @Post('result')
  getResult(@Body() result: any) {
    return this.appService.handleResult(result);
  }
}
