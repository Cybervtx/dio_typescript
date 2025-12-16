import { CompanyAccount } from "../class/CompanyAccount";
import { PeopleAccount } from "../class/PeopleAccount";

const peopleAccount = new PeopleAccount('Pedro', 12345, 987654321);
console.log(peopleAccount);
peopleAccount.deposit();

const companyAccount = new CompanyAccount('Tech Corp', 54321);
// console.log(companyAccount);
companyAccount.deposit();