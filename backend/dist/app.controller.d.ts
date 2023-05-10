import { AppService } from './app.service';
import { Loan } from './models/loan.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLoans(): Loan[];
    getLoanById(id: string): Loan;
    addLoan(loan: Loan): Loan;
    getResult(result: any): any;
}
