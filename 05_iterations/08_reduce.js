const myNums = [1,2,3,4,5,6,8,9,10]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0)

// const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 8999
    },
    {
        itemName: "mob dev course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);
