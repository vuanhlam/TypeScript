enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'lam',
    age: 30,
    role: Role.ADMIN
}

console.log(person)

if(person.role === 0) {
    console.log('admin')
}

if(person.role === Role.ADMIN) {
    console.log('admin')
}