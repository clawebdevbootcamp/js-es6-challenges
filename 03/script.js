

/*
Define 3 variables and assign the same values from the client object properties

let age, name, country

ProTip: the 3 variables can be defined in one line
*/
const client = {
  age: 47,
  name: "John",
  country: "BR",
};

const {age, name, country} = client

console.log(age)
console.log(name)
console.log(country)