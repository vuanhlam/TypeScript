class Person2 {
  private _age: number;
  public firstName: string;
  public lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get age() {
    return this._age;
  }

  set age(newAge: number) {
    if(newAge < 0 || newAge > 120) {
        throw Error('Invalid age')
    }
    this._age = newAge
  }
}

let person2 = new Person2(23, 'lam', 'vu');
console.log(person2)
person2.age = 19

console.log(person2.age) // getter
