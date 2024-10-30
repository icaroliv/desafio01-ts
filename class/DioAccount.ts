export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (depositValue: number): void => {
    this.balance = this.balance + depositValue;
    console.log(`Voce depositou ${depositValue}`);
  };

  withdraw = (withdrawValue: number): void => {
    if (this.validateStatus()) {
      if (withdrawValue <= this.balance) {
        this.balance = this.balance - withdrawValue;
        console.log(`Voce sacou ${withdrawValue}`);
      } else {
        console.log(`Saldo insuficiente`);
      }
    }
  };

  getBalance = (): void => {
    console.log(`Seu saldo ${this.balance}`);
  };

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
