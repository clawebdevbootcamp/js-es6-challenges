/* 
Create a function which if called with no arguments it returns:
exampleFunction() //Name - Age 
If 'myName' and 'myAge' are passed as arguments, this is the desired outcome: 
exampleFunction({’myName’, ‘myAge’}) //myName - myAge
*/


function foo({ myName = 'Name', myAge = 'Age' } = {}) {
      console.log(myName,myAge);
    }

    foo({myName : 'Name', myAge : 'Age'})