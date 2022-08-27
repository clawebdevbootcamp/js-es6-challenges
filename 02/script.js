/* 
Create a function which if called with no arguments it returns:
exampleFunction() //Name - Age 
If 'myName' and 'myAge' are passed as arguments, this is the desired outcome: 
exampleFunction({’myName’, ‘myAge’}) //myName - myAge
*/

const exampleFunction = ({ first = "Name", second = "Age"} = {}) => {
    console.log(first, second)
}

exampleFunction()
exampleFunction({first: "myName", second: "myAge"})
