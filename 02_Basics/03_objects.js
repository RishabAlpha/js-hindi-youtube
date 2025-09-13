// singleton object
//Object.create

// object literals

//Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Rishab",
    "Full Name": "Rishab Singh",
    [mySym]: "mySymVal",
    age: 23,
    location: "Pune",
    email: "alpha@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "alpha@google.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "alpha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello Js User ${JsUser.name}`);
    
}
JsUser.greeting()





