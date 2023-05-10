import { ClientProxy } from '@nestjs/microservices';
import { Loan } from './models/loan.entity';
export declare class AppService {
    private readonly communicationClient;
    private readonly creditServiceCommunicator;
    private loans;
    private acceptedLoans;
    private refusedLoans;
    constructor(communicationClient: ClientProxy, creditServiceCommunicator: ClientProxy);
    getLoans(): Loan[];
    addLoan(loan: Loan): Loan;
    getLoanById(id: string): Loan;
    handleResult(result: any): any;
}
