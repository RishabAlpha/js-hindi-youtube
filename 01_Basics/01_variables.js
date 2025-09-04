const accountId = 144553
let accountEmail = "alpha@yahoo.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"

accountPassword = "212134"

accountCity = "pune"

console.log(accountId);

/*
Refrain from using var keyward beacuse of issue in block scope & global scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
