/* 
Create a function which if called with no arguments it returns:
exampleFunction() //Name - Age 
If 'myName' and 'myAge' are passed as arguments, this is the desired outcome: 
exampleFunction({’myName’, ‘myAge’}) //myName - myAge
*/

function myFunction({ myName ='name' , myAge= 'age' } = {}) {
  console.log(myName, myAge)
}
myFunction({myName: 'Moe', myAge: 25})