
// var c = 300

if (true) {
let a = 10 //block scope
const b = 20 //block scope
// var c = 30
} // scopes

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "joe"

    function two() {
        const website =  "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()  
}
// one()

// if (true){
//     const username = "root"
//     if (username === "root"){
//         const website = " youtube"
//         // console.log(username + website);   
//     }
//     // console.log(website)
// }

// console.log(username);

//////////////////// interesting ////////////////

console.log(addOne(5))
function addOne(num) {
    return num + 1
}

console.log(addTwo(8)); // Hoisting

const addTwo = function(num) {
    num + 2
}

