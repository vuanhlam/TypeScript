interface Person {
    readonly firstName: string,
    lastName: string,
    address?: string
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`
}

let person = {
    firstName: 'lam',
    lastName: 'vu'
}

console.log(getFullName(person))
