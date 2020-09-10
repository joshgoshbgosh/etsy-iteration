console.log(items)

let totalPrice = items.reduce((accumulator, item) => accumulator + item.price, 0); //. reduce used.   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
console.log(totalPrice);

let averagePrice = totalPrice / items.length;
console.log(averagePrice)
/////////////////////////////////////////////////////////////////////////

let price = items.filter(item => item.price < 18 && item.price > 14); //used .filter to find items greater than 14 but less than 18.
console.log(price)

var productInfo = []
////////////////////////////////////////////////////////////////


const britishItems = items.filter(function(item) {
  return items.currency_code === 'GBP';

});
britishItems.forEach(function(item) {             //.filter used to filter through object items to grab the gbp currency item
  console.log(item.title);
});




////////////////////////////////////////////////////////

const woodFind = items.filter(function(item) {
  return item.materials.includes('wood');
});
                                                        ///use .filter method to find what was made of wood.
const woodLog = woodFind.forEach(function(item) {
  console.log(`${item.title} is made of wood.`);
});


////////////////////////////////////////////////////

const moreThanEight = items.filter(function(item) {
  return item.materials.length >= 8;
});

const matLog = moreThanEight.forEach(function(item) {                           //used filter method
  console.log(`${item.title} has ${item.materials.length} materials.`);
  item.materials.forEach(function(item) {
    console.log(item);

  });
  console.log('\n');
});
//////////////////////////////////////////////////////

const madeBySeller = items.filter(function(item) {
  return item.who_made === "i_did";
});
                                                                            //used filter method
console.log(`${madeBySeller.length} items were made by their sellers. `);


// had help in class for the last 4 problems.   I will go back over these
// problems indiviually to to disect the methods used to get these done
// so i can understand this better.
