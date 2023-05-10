export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  income: number;
  state: string;
  // ... other properties

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
