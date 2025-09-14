// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //named IIFE
    console.log(`DC CONNECTED`)
})();  // important semicolon , for using 2 IIFE

// ()() // 1st function defintion 2nd execution call
// to reduce global scope pollution we use IIFE

( (name) => {
    // unamed IIFE
    console.log(`DB CONNECTED TOO ${name}`);
    
})('julie')

// it works for both type of function definition