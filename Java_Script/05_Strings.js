const name = "Kartik Chauhan"
const repoCount = 5

//

//New way to write the strings
// console.log(`Hello my name is  ${name} and my repo count is 50 ${repoCount}`);
// console.log(typeof name);

// const gameName = new  String ("God of War")
// console.log(gameName);
// console.log(typeof gameName);
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.charAt(2));
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("o"));
// console.log(gameName);

//++++++++++++++++ Strings Methods +++++++++++++//

const word = "Hello World!"
//1-To check the length of String
let len = word.length
console.log(`The length of the string is : ${len}`);

/* ++++++++++ Extracting String Characters ++++++++++++++ */

//2- charAt() method returns the character at a specified index (position) in a string (It does not aloow -ve indexes)
let idx = word.charAt(2)
console.log(`the Character at the index 2 is:${idx}`);

//3- charCodeAt() method returns the code of the character at a specified index in a string:
let codeOfCharacter = word.charCodeAt(2)
console.log(`The code of the character at the index 2 is: ${codeOfCharacter}`);

//4- at() method returns an indexed character from a string (It allows -ve indexes)
let negativeIndex = word.at(-2)
console.log(`the value at negative index -2 is :${negativeIndex}`);

/* +++++++++++++++++++ Extracting String Parts +++++++++++++ */ 

//5- slice() extracts a part of a string and returns the extracted part in a new string.
/*If you omit the second parameter, the method will slice out the rest of the string:
If a parameter is negative, the position is counted from the end of the string:*/
const fruitNames = "Apple, Banana, Kiwi"
let partSlice = fruitNames.slice(7, 13)
console.log(`The slice part of the original string is:${partSlice}`);

//6- substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().
let subSlici = fruitNames.substring(4,10)
console.log(`The substring from the original string is :${subSlici}`);

//7-substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
//If the first parameter is negative, the position counts from the end of the string.
let subSliceStr = fruitNames.substr(4,7)
console.log(`The substring from the original string till the length give is ${subSliceStr}`);

/* ++++++++++++++++ Converting to Upper and Lower Case +++++++++++++++ */
//8-A string is converted to upper case with toUpperCase():
const text1 = "KaRtIk ChaUhan"
let upperCaseText1 = text1.toUpperCase()
console.log(`The all char in text1 are converted to upper case: ${upperCaseText1}`);

//9-A string is converted to lower case with toLowerCase():
let lowerCaseText1 = text1.toLowerCase()
console.log(`The all char in text1 are converted to lower case: ${lowerCaseText1}`);

// 10- concat() joins two or more strings:
let word1 = "Kartik"
let word2 = "Chauhan"
let word3 = word1.concat(" ", word2)
console.log(`Concating Two diff. strings gives us new string :${word3}`);

//11-The trim() method removes whitespace from both sides of a string:
let trimString = "    Kartik chauhan             "
let stringTrimed = trimString.trim()
console.log(`THe string without trim method ${trimString}`);
console.log(`The string with trim method ${stringTrimed}`);

//12- The padStart() method pads a string from the start.
//The padStart() method is a string method.To pad a number, convert the number to a string first.
let padString = "5"
let padded = padString.padStart(6,"0")
console.log(`The pad(0) os added before the char 5 in var padstring till length reaches 6:${padded}`);

//13-The padEnd() method pads a string from the end.It pads a string with another string (multiple times) until it reaches a given length.

let padStartString = "5"
let paddedString = padStartString.padEnd(4,"x")
console.log(`The(x) will be added after the var value: ${paddedString}`);

//14- The repeat() method returns a string with a number of copies of a string.
let  repatingWord = word1.repeat(3)
console.log(`The value in var word1 will be repeated 3 times ${repatingWord}`);

//15- The replace() method replaces a specified value with another value in a string.

let originalText = "Please visit my Linkdin"
let newText = originalText.replace("Linkdin", "GitHub")
console.log(`The new string will be :${newText}`);
//The replace() method replaces only the first match
let oText = "Please Visit my Linkdin and Linkdin"
let repText = oText.replace("Linkdin", "GitHub")
console.log(`Only the first Linkdin will be replaced ${repText}`);
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work
let tex = "Please visit LINKDIN"
let reptex = tex.replace(/lINKDIN/i, "GitHub")
console.log(`Wriiting in Upper case will not work ${reptex}`);

//A string can be converted to an array with the split() method:
let astring = "Hello World!, kartik chauhan"
let splitString = astring.split("")
console.log(`Return array will be an array of single characters ${splitString}`);

let splitStringcomas = astring.split(",")
console.log(splitStringcomas);






 


















