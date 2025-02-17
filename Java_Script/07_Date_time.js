// +++++++++++++++++++++++++++++++ DATE +++++++++++++++++++++++++++++
/*
There are 9 ways to create a new date object:
*/
/*
1 - new Date()
2 - new Date(date string)
3 - new Date(year,month)
4 - new Date(year,month,day)
5 - new Date(year,month,day,hours)
6 - new Date(year,month,day,hours,minutes)
7 - new Date(year,month,day,hours,minutes,seconds)
8 - new Date(year,month,day,hours,minutes,seconds,ms)
9 - new Date(milliseconds)
*/


// let  myDate = new Date()
// console.log(myDate);
// console.log(typeof(myDate));
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// const d1 = new Date()
// console.log("The Date object with the current date and time:", d1);

// new Date(date string)
// const d2 = new Date("January 7, 2025 11:13:00")
// console.log("Date object from Date String:", d2);
// const d3 = new Date("2022-05-23")
// console.log(d3)

// creates a date object with a specified date and time
/*
--> 7 numbers specify year, month, day, hour, minute, second and millisecond(in that order)
--> JavaScript counts months from 0 to 11:
*/

// const d4 = new Date(2018, 12, 24, 10, 33, 30)
// console.log("Specifying a month higher than 11, will not result in an error but add the overflow to the next year:",d4)
// const d5 = new Date(2018, 2, 35, 10, 34, 30)
// console.log("Specifying a day higher than max, will not result in an error but add the overflow to the next month:",d5);

// ++++++++++++++++++++++++ Date Methods ++++++++++++++++++++++++++++++++++
// 1--> toString
// const d6 = new Date()
// console.log("when you display a date object in HTML, it is automatically converted to a string with toString() method:", d6.toString());

// 2--> toDateString
// const d7 = new Date()
// console.log("This method converts a date to more readable format:", d7.toDateString());

// 3 --> toUTCString()
// const d8 = new Date()
// console.log("This method converts a date to a string using the UTC standard", d8.toUTCString());

// 4 --> toIOSString()
// const d9 = new Date()
// console.log("This method converts a date to a string using the ISO standard:",d9.toISOString());


// +++++++++++++++++++++ Time +++++++++++++++++++++++++++++++
/*
                     CONVERT DATE INTO TIME 
*/
const createdDate = new Date("01-12-2024")
// console.log(createdDate);

// const myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log("It will give value in milliseconds", createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

 