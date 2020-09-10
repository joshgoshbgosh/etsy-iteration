console.log(items)

let totalPrice = items.reduce((accumulator, item)=> accumulator + item.price,0); //. reduce used.   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
console.log(totalPrice);

let averagePrice = totalPrice / items.length;
console.log(averagePrice)


let price = items.filter(item => item.price < 18 && item.price > 14); //used .filter to find items greater than 14 but less than 18.
console.log(price)
