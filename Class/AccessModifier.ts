class Employee {
    public empCode: string;
    private empName: string;

    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}

let em = new Employee('aaa', 'bbb');
console.log(em)

em.empCode = '1233';
em.empName = 'lam'

console.log(em)

class User {
    public name: string;
    protected code: number

    constructor(name: string, code: number) {
        this.name = name;
        this.code = code;
    }
}

class Sales extends User {
    private dep: string;

    constructor(name: string, code: number, dep: string) {
        super(name, code);
        this.dep = dep;
    }
}

let newUser = new Sales('lam', 10, 'boss room');
newUser.code