//quiz 6 Arrays

const car = ["Mark x","Volvo","country bus","metro","royal saloon","wish","fielder","peugeot",]


    //for loop
    for (i=0;i<car.length;i++){
        console.log("car :"+car[i])
   }
   
     //====while loop
   let i = 0;
   while(i<car.length){
       console.log("car :"+car[i])
       i++
   }
   
   
   //==========do while

   do{
        console.log(car[i])
        i++
   }while(i<car.length)