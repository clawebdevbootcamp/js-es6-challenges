/* 
Create a function which if called with no arguments it returns:
exampleFunction() //Name - Age 
If 'myName' and 'myAge' are passed as arguments, this is the desired outcome: 
exampleFunction({’myName’, ‘myAge’}) //myName - myAge
*/
const myFunction = ({one = "Name", tow = "Age" } = {}) => {
    console.log(one,tow);
}
myFunction({one:'myName', tow:'myAge' })