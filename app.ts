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

const num1 = 1;
const num2 = 2;
const printResult = true;
const resultPharse = "Result is: ";

add(num1, num2, printResult, resultPharse);
