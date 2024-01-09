function addTwo(a: number, b: number, c?: number): number {
    if(c) return a + b + c
    return a + b;
}

function testF() {

}

console.log(addTwo(1,2, 3))
console.log(typeof testF())
