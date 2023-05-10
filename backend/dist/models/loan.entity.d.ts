import { User } from './user.entity';
export declare class Loan {
    id: string;
    user: User;
    amount: number;
    interestRate: number;
    duration: number;
    startDate: Date;
    createdAt: Date;
    status: string;
    constructor(partial: Partial<Loan>);
}
