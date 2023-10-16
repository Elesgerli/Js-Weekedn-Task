// Task 2

let num = parseInt(prompt("ededi daxil ed!:"));
let count=0

if (num < 0) {
    console.log("Eded musbet olmalidir");
} 
else {
    if (num == 0) {
        console.log("Eded 0 dan boyuk olmalidir");
    }
    else {
        for (let i = 2; i <num; i++) {
            if (num % i == 0) {
               count++
               break;
            }
            else if(num%i==1) {
           
                
                break;
              
            }

           
            

        }
      
    }

}

if (count%num  != 0) {
    console.log("Murekkebdir");
   } else {
    console.log("Sadedir");
   }
