// GENERIC nó giống như tham số, cho chúng ta biết trước tham số thuộc loại gì
// cho phép khai báo cái dạng biến của chúng ta

type myArr = Array<string>; // myArr thuộc dạng string[]
type myArr1 = Array<any>; // myArr1 thuộc dạng any[]
type numArr = Array<number>; // numArr thuộc dạng number[]

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
console.log(l1);

//
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(['a', 'b', 'c'])

const l5 = lastT<number>([1])


// Generic extends
const makeFullName = obj => ({
    ...obj,
    fulName: `${obj.firstName} ${obj.lastName}`
})


const makeFullNameConstraint = (obj: {firstName: string, lastName: string}) => ({
    ...obj, fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({firstName: 'anh', lastName: 'lam'});
const n2 = makeFullNameConstraint({firstName: 'anh', lastName: 'lam', age: 30});

const makeFullNameConstraintWithGenerics = <T extends { firstName: string, lastName: string }>(obj: T) => ({
    ...obj, fullName: `${obj.firstName} ${obj.lastName}`
})

const n3 = makeFullNameConstraintWithGenerics({firstName: 'anh', lastName: 'lam', age: 30})