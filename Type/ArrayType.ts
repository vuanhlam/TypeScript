let arr: string[] = ['meme', 'monday']

arr.push('ahihi')
arr.push(19)

let numbers = [1, 2, 4];
numbers.push(5)
console.log(numbers);
numbers.push('ahihi');


// union
let arr1: (string | number)[] = [10, 'ahihi']

arr1.push('ahihi')
arr1.push(12);
arr1.push('can push string')
arr1.push(true)