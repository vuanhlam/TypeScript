//* Định nghĩa ra một cái khung và bắt phải tuân theo
//* abstract class không thể tạo mới một instance

abstract class Employee9 {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  abstract getSalary(): number;

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()}`;
  }
}

const e1 = new Employee9("lam", "vu");

class FullTimeEmployee extends Employee9 {
  private salary: number;

  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName);
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

const e2 = new FullTimeEmployee("lam", "vu", 1000);
console.log(e2);
console.log(e2.compensationStatement());
