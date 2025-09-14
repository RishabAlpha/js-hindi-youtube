const coding = ["js","html","cpp","css","python"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (value) => {
//     console.log(value);
    
// } )

// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "html",
        languageFileName: "html"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )