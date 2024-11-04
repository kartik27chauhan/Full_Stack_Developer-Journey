// 1-Given the string "Hello World", use a string method to convert it to all uppercase letters.
//solution ==>
    let s = "Hello World"
    let upperCaseString = s.toUpperCase()
    console.log(`String after converting to upper case:${upperCaseString}`);

// 2-How would you extract the substring "World" from the string "Hello World"?
    let origString = "Hello World"
    let subString = origString.substring(6)
    console.log(`Extracted substring is:${subString}`);

// 3-If you have the string "JavaScript is awesome", how can you replace the word "awesome" with "fun"?
    let beString = "JavaScript is awesome"
    let repString = beString.replace("awesome", "fun")
    console.log(`Replaced word awesome with fun: ${repString}`);

// 4-Use a method to check if the string "Learning JavaScript" starts with the word "Learning".
    let startWord = "Learning JavaScript"
    let checWord = startWord.startsWith("Learning")
    console.log(`The string start with the word learning:${checWord}`);
    
// 5- Given the string "apple, banana, cherry", split it into an array of fruits using a string method.
    let fruitsString = "apple, banana, cherry"
    let fruitsArray = fruitsString.split(", ")
    console.log(`The array will be:${fruitsArray}`);

// 6-Use a string method to find the position of the first occurrence of the letter "o" in the string "Programming"
    let poString = "Programming"
    let occString = poString.indexOf("o")
    console.log(`Index of o is : ${occString}`);

// 7- Given the string " Trim me ", how can you remove the extra spaces from both sides?
    let trimString = "  Trim me  "
    let stringTrim = trimString.trim()
    console.log(`String after removing extra spaces ${stringTrim}`);

// 8- How would you concatenate the strings "Hello" and "World" with a space in between?
    let txt1 = "Hello"
    let txt2 = "World"
    let result = txt1.concat(" ",txt2)
    console.log(`Strings after concating${result}`);

// 9-Use a method to convert the string "10" to an integer value.
    let str = "10"
    let num = Number(str)
    console.log(`String after converting in number :${num}`);

// 10-If the string is "I love JavaScript", how can you check if it contains the substring "JavaScript"?
    let aStr = "I Love JavaScript"
    let containString = aStr.includes("JavaScript")
    console.log(containString);

// More Questions
    


    
    
    
    


    
    