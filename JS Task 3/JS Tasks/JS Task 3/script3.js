// Task 3

let num=parseInt(prompt("Eded daxil edin"))
let pow=parseInt(prompt("Quvvet daxil edin"))
let result = 1;
for (let i = 1; i <= pow; i++) {
    result *= num;
}

console.log("Daxil edilen eded:" + pow +" " +"Daxil edilen quvvet:" + num + " " +"Netice:" + result);


// Big  o Notation: n+4=2+4=6