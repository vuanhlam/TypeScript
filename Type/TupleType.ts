let arr = ['anhlam', 30, false]
arr[0] = 12,
arr[1] = 'xxx',
arr[2] = true

console.log(arr); // [12, 'xxx', true]

// tuple
// phải có type cụ thể tại vị trí cụ thể
const tup: [string, boolean, number] = ['string', false, 23];
const myStudent: [string, number] = ['anhlam', 21];



//* tuple quan trọng thứ tự  => dataType/size/order 
let skill: [string, number] = ['ahihi', 120]

let skill1: [boolean, number, string];

skill1 = [false, 1, 'ahihi'];
skill1 = [1, true, 'ahihi']

//* Optional tuple element
let skill3: [boolean, number?, string?];

skill3 = [true]