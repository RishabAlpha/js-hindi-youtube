const userEmail = "abc@gmail.com"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Dont have user email");
    
}

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// expect all values listed above
// "0", "false", " "(space), [], {}, function(){} (empty function)


// checking empty array
const newArray = []

if (newArray.length === 0) {
    console.log("Array is empty");
    
}

// checking empty object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalishing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15 //(first value will get assigned)
// console.log(val1);

// Terniary Operator

// condition ? true : false

// if condition true will execute else false will execute
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;
