class Person {
  ssn: string;
  firtName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firtName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firtName} ${this.lastName}`;
  }
}

let lam = new Person('122', 'lam', 'vu'); 
console.log(lam)
console.log(lam.getFullName())