/* 

Create a function that doubles whatever number you pass as an argument:

exampleFunction(4) //8 

The same function can multiply the number by x times if you pass x as a second argument: 

exampleFunction(4, 3) //12

*/
const myNum = (num1, num2=2) =>{
    return num1 * num2;
}
myNum (3)
 // 6
myNum(3,2)
//6