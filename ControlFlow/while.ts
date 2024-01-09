//* chạy với số lần không cần biết trước, thoát vòng lặp dựa vào điều kiện 

let counter = 0;

while(counter < 5) {
    console.log(counter);
    if(counter % 2 === 0) break;
    counter++
}