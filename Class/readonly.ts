//* Readonly chỉ đọc không thể chỉnh sửa

class Person1 {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate
    }
}

let person = new Person1(new Date(1990, 10, 10))
console.log(person)

person.birthDate = new Date(1990, 10, 10)