//Quiz3 Random numbers
let i = prompt("Enter a number")

let a =(Math.floor(Math.random()*10))

if(Number(i)== a){
     console.log("Good work")
     console.log("The number was :"+i)
}
else
console.log("Not matched, the random number was :"+a+" you entered :"+i)