function add(
  n1: number,
  n2: number,
  printResult: boolean,
  resultPharse: string
) {
  let result = n1 + n2;
  if (printResult) {
    console.log(resultPharse + result);
  } else {
    return result;
  }
}
add(num1, num2, printResult, resultPharse);

const num1 = 1;
const num2 = 2;
const printResult = true;
const resultPharse = "Result is: ";

//TODO: Type inference: là built-in của TypeScript
//* nghĩa là nó sẽ tự hiểu => một biến đang thuộc kiểu dữ liệu nào, khi bạn khởi tạo cho biến một giá trị 
//* trong khi bạn không định nghĩa kiểu dữ liệu cho nó 
//* => ví dụ: num1, num2 printResult, resultPharse những biến này không được khai báo hay định nghĩa kiểu dữ liệu 
//* mà nó dựa vào giá trị bạn assign để biết được biến đó thuộc kiểu dữ liệu gì 

let numberInference = 5; // -> ở đây TypeScript đang tự hiểu rằng biến numberInference là kiểu number vì được gán giá trị là số 
numberInference = 'meme' // -> và nếu assign ngược lại cho numberInference là giá trị với kiểu dữ liệu khác sẽ báo lỗi 
numberInference = 10
numberInference = true // -> sai kiểu dữ liệu 
numberInference = 7

//! ===> Type inference 
