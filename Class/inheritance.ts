class Person3 {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describle(): string {
    return `this is ${this.firstName} ${this.lastName}`;
  }
}

class Employee1 extends Person3 {
  private jobTitle;

  constructor(firstName: string, lastName: string, jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  //* Override
  getFullName(): string {
    return `${super.describle()}, this is son method `;
  }
}

const emp = new Employee1("vu", "lam", "freelancer");
console.log(emp);
console.log(emp.getFullName());
console.log(emp.describle());
