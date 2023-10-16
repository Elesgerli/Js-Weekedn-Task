let numbers = [ 3,  8, 5, 10, 12,];

let tek = 0; 
let cut = 0;
let result;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
  
    cut += numbers[i];
  } else  {
 
    tek += numbers[i];
  }
}
 result = (cut-tek);

console.log(result); 


// Big o Notation:n+6=10+6=16