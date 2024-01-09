function add(a: number | string, b: number | string) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
    }
    throw new Error('Parametor must be number or string');
}

console.log(add(1,2))
console.log(add('1','2'))
console.log(add(true,2))