const user = {
    username: "Harry",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //global context

// function chai(){
//     let username= "harry"
//     console.log(this.username);
    
// }

// chai()

// const chai = function() {
//     let username= "harry"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username= "harry"
    console.log(this);
}
// chai()


//explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2) // useful in react


console.log(addTwo(8,9));

const myArray = [2,5,9,7,8]

