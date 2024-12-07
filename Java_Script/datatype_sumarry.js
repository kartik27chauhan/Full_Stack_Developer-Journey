// Primitive (Call by Value) => Stack Memory

// 7 types : Strings, Number, Boolean, null, undefined, Symbol, BigInt


let userEmail;
console.log(userEmail);

// How Symbol is defined

const Id = Symbol("123")
const anotherId = Symbol("123")
console.log(Id === anotherId);

const bigNumber = 34544774747474747n
console.log(typeof bigNumber);


// Reference Type (Non-Primitive) => Heap Memory
// Array, Objects, Functions
// Array=>
const heros = ["shaktiman", "nagraj", "doga"]
// Objects (key-value pair)
let myobj = {
    name: "kartik",
    age : 45
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof(myobj))


