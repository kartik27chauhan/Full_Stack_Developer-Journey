let score = "33"
//console.log(typeof score);

//To chnage the string in number
let valueInNumber = Number(score)
//console.log(typeof valueInNumber)

let age = "26abc"
//console.log("Type of Age is:",typeof age)

//To chnage the string in number
let InNumber = Number(age) 
/*
It gonna change the string into number but when you print variable
the output will be NaN =>Not a Number
*/
//console.log(typeof InNumber)
//console.log(InNumber)

//if the value in variable is assigned null
let s = null
//console.log(typeof s)

let c = Number(s)
//console.log("Type of c :",typeof c)
//console.log(c)

//if the value in variable is undefined 
let q = undefined
//console.log(typeof q)

let w = Number(q)
//console.log("Type of w :",typeof w)
//console.log(w)
//if the value in variable is boolean 
//console.log("For Boolean value")
let e = true
//console.log(typeof e)

let f = Number(e)
//console.log("Type of f :",typeof f)
//console.log(f)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggesdIn = 0
let booleanIsLoggedIn = Boolean(isLoggesdIn)
//console.log("Type of :", typeof booleanIsLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true
// "" => false
// "kartik" => true

//Convert in string

let someNumber = 45
//console.log(typeof someNumber)

let stringNumber = String(someNumber)
//console.log(typeof stringNumber)
//console.log(stringNumber)


//************ Operations ****************//
let value = 3
let negvalue = -value
//console.log(negvalue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%3)

let str1 = "Hello"
let str2 = "Kartik"
let str3 = str1 + str2
// console.log("Assigning new variable output is :",str3)
// console.log("Without assigning new variable output:",str1 + str2)

// console.log("1" + 2)
// console.log("1" + 2)
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")


console.log(+true)
console.log(+"")


