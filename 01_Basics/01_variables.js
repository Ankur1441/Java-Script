const accountId = 122345
let accountEmail = "mack12@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"
let accountState;

//  accountId = 2 //Not allowed

 console.log(accountId)
 /*
    Prefer not to use var 
    because of issue in block scope or functional scope 

 */

 accountEmail = "nairobi1234@gmail.com"
 accountPassword = "5678"
 accountCity = "mumbai"

 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])