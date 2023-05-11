//Quiz 4
       //FizzBuzz

       for(num=1;num<=100;num++){
        if(num%5==0 && num%3==0){
             console.log("FizzBuzz")
             continue
        }
        
        if(num%5==0){
             console.log("Fizz")
             continue
        }
   
        if(num%3==0){
             console.log("Buzz")
             continue
        }
             console.log(num)
   }
   