import { DioAccount } from "./DioAccount";

export class TemporaryAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositTemporary = (depositValue: number): void => {
    this.deposit(depositValue + 10);
  };
}
