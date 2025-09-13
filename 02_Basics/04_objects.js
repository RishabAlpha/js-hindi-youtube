// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "arun"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arun",
            lastname: "Mondal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //Object.assign(target, sources)

const obj3 = {...obj1, ...obj2} //most frequently used
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

// course.courseinstructor

const {courseinstructor: instructor} = course 

// console.log(courseinstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

