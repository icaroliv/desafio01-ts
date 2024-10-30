import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { TemporaryAccount } from "./class/TemporaryAccount";

const peopleAccount = new PeopleAccount(10, "Icaro", 20);

console.log("People Account");

peopleAccount.deposit(20);

peopleAccount.getBalance();

peopleAccount.withdraw(30);

peopleAccount.getBalance();

console.log("Companny Account");

const companyAccount = new CompanyAccount("Empresa x", 20);

companyAccount.getBalance();

companyAccount.getLoan(1000);

companyAccount.getBalance();

companyAccount.withdraw(60);

companyAccount.getBalance();


console.log("Temporary Account");

const temporaryAccount = new TemporaryAccount("Empresa y", 20);


temporaryAccount.getBalance();

temporaryAccount.depositTemporary(673);

temporaryAccount.getBalance()

temporaryAccount.deposit(30);

temporaryAccount.getBalance();

temporaryAccount.withdraw(312);

temporaryAccount.getBalance();