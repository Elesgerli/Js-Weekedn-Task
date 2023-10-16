let Numbers1 =[1,4,5,6,7];
let Numbers2 =[1,2,3,4,5];
let count;
let numarr=[];
for (let i = 0; i < Numbers1.length; i++) {
    count=true
    for (let j = 0; j < Numbers2.length; j++) {
   if (Numbers1[i]=== Numbers2[j]) {
    count=false;
    break
   }
      
    }
   if(count){
    numarr.push(Numbers1[i] );

   }

}

console.log(numarr);

//   Big o notation: n**2 +5=25+5=30

