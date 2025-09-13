function sayMyname() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
}

// sayMyname()

// function addTwoNumbers(num1,num2) { //parameter
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1,num2) { //parameter
    let result = num1 + num2
    return result
}

// const result = addTwoNumbers(2.5,6) //argument

// console.log(result);
function loginUserMessage(username = "Mark"){
    if (username){
        return `${username} just logged in!`
    }
    
}

// console.log(loginUserMessage("joe"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1) {  //rest operator
    return num1 
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "mark",
    price: 288
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

const myNewArray = [200, 300 , 400, 299]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
