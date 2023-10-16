// Task 1
let num = 303;
let reserv=0;
let num2=num
console.log("Number"+num);

while(num!==0){
    let ex=num%10;
    reserv=reserv*10+ex;
    num=parseInt(num/10)
   
}
let polindrom=num2==reserv

 console.log("Polindrom:" +polindrom);


//  Big o notation : n+6=3+6=9

 

