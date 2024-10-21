const accountID = 144553            //can't change the value
let accountEmail = "xyz23@gmail.com"
var accountPassword = "1234"
/*
Prefer not to use var
 beacause of issue in block scope and functional scope
*/
accountCity = "Solan" // not a safe to initialize a variable

let accountState;

//accountID = 2
accountEmail = "abc45@gmail.com"

accountPassword = "231123"

accountCity = "chandigarh"

console.log(accountID);

console.table([accountID,accountEmail,accountPassword,accountCity, accountState])
