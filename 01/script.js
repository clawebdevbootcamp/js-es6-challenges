/* 

Create a function that doubles whatever number you pass as an argument:

exampleFunction(4) //8 

The same function can multiply the number by x times if you pass x as a second argument: 

exampleFunction(4, 3) //12

*/

function multiplyFunction (a, b=2){
  let c 
  c = a*b
  return  c
}