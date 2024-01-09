function addTwo1(a: number, b: number): number {
    return a + b;
}

addTwo1(1,2)

function Greet(greeting: string, ...names: string[]) {
    console.log(names)
    return greeting + " " + names.join(", ") + "!"
}

console.log(Greet('Hello', 'Lam', "Boss"))