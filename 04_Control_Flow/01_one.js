// if

const isLoggedin = true
const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50");
// } else {
//     console.log("temperature greater than 50")  
// }

const score = 200

// if (score > 100) {
//     const power = "fly" // it's scope is limited to this condition only
//     console.log(`User power: ${power}`);
    
// }

// Short Hand Notation

const balance = 1000

// if (balance > 500) console.log("test"); // runs in only one line , if need multiple line use "," .

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance <750) {
//     console.log("less than 750");
// } else if (balance < 950) {
//     console.log("less than 950");
// } else {
//     console.log("greater than 1000");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

// and condn
if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}
// or condn
if (loggedinFromEmail || loggedinFromEmail) {
    console.log("User Logged in");
}


