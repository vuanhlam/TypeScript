//* biết trước số lần lặp 

for (let i = 0; i < 10; i++) {
   console.log(i)   
}

let i1 = 0
for(; i1 < 10; i1++) {
    console.log(i1)
}

for(let i = 0; ; i++) {
    console.log(i)
    if(i > 9) break;
}

let i = 0;
for(; ; ) {
    console.log(i)
    i++
    if(i > 9) break;
}