
//* overloading: việc viết các hàm giống nhau gọi là overloading, cái thằng sau ghi đè lên thằng trước 
function addNew(a: number, b: number): number;

function addNew(a: string, b: string): string;

function addNew(a: any, b: any) {
  return a + b;
}


console.log(addNew(4,5))
console.log(addNew('ahihi', 'ahuhuh'))