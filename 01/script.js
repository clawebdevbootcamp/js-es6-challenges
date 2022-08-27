/* 

Create a function that doubles whatever number you pass as an argument:

exampleFunction(4) //8 
*/

const twoTimesFunction = (x, y=2) => {
    console.log(x*y)}



/* 
The same function can multiply the number by x times if you pass x as a second argument: 

exampleFunction(4, 3) //12
*/

twoTimesFunction(3) //6
twoTimesFunction(3,3) //9