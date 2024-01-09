//* enum (enumerated: liệt kê, one by one) là một nhóm các giá trị hằng số
//* CÚ PHÁP:  enum name { constant1, constant2, ...}

enum API_STATUS {
  PENDING,
  FULFILLED,
  REJECTED,
}

let a = API_STATUS.PENDING;
let b = API_STATUS.FULFILLED;
let c = API_STATUS.REJECTED

console.log(a, b, c)