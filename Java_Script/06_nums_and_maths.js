// const score = 400
// console.log(score);
// console.log(typeof(score));



// const balance = 100
// console.log(typeof(balance));

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2))


// ++++++++++++++++++++++++++++ Integer Precision+++++++++++++++++++++++++++++++++
/*
Integers (numbers without a period or exponent notation) 
are accurate up to 15 digits.
*/
// let x = 999999999999999
// console.log(x);

// console.log("If the value of variable or number is above 15 digits then");
// let y = 9999999999999999
// console.log("The actuall value y is 9999999999999999", "It will automatically increase if without any notation",y);



//+++++++++++++++++++++++++++++++ toPrecision ++++++++++++++++++++
// const otherNumber = 1231.8966
// console.log(otherNumber.toPrecision(5));

// const num = 1000000
// console.log(num.toLocaleString("en-IN"));


// +++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.sqrt(5));
// console.log("Minimum  value is :", Math.min(35,5,6,23,0));
// console.log("Maximum value is :", Math.max(35,5,6,23,0));
// console.log("The value will come between 0 to 1 only", Math.random());
// console.log(Math.random()*10)
// console.log("To avoid the value 0 we will use", (Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)






