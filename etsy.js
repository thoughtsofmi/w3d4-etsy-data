//question 1 question 1 question 1 question 1 question 1 question 1 question 1
//looked back at the class notes.  changed the price to items.  because items is the variable on the items.js. Used the reduce function to target the list to get the total price of $590.65. use (items.length) to get the number of items in the list.  then make a new variable avg price to divide the total.price/items.length.
var total = items.reduce(function(previous, current){
 return {price: previous.price + current.price}
},{price: 0})

var avgPrice = total.price /items.length

console.log(avgPrice) // needs to be rounded.

//question 2 question 2 question 2 question 2 question 2 question 2 question 2
//show me how to get an array of items that cost between $14.00 and $18.00.
// Looked through the notes and saw that I can use the filter array to match the condition.  In this case.. the condition was to find the price between $14 to $18.  I noticed that this printed all the information and it looks like on the example that I need to just have the title shown.  I made anoter variable gettingTitle = to the filter I made to get the items that was priced between 14 and 18, and use the map function to pull out only the title.  I finished by console.log the title and gettingTitle.
var costbet14to18 = items.filter(function(item) {
     return item.price > 14 && item.price < 18
})
var gettingTitle = costbet14to18.map(function(items){
  return items.title
})
console.log("Items that cost between $14.00 and $18.00 USD:",  gettingTitle)

// need to fix: No quotes on items, no object {} on each title, and it's not showing the word title....

//question 3 question 3 question 3 question 3 question 3
//Find items w "GBP" currency code and print its name and price.
//used the filter array to filter the items to find the currency code of GBP.  I knew the exact value of what I needed.  So it was a triple = sign.  then I made two variables to use the map array to find the title and the price.
var british = items.filter(function(items){
  return items.currency_code === ('GBP')
})
var britishN = british.map(function(items){
  return items.title
})
var britishP = british.map(function(items){
  return items.price
})
console.log(britishN + ' costs '+ '£' + britishP)



//question 4 question 4 question 4 question 4 question 4
//Show me how to find which items are made of wood
// I felt like this was similar to question 2.  use filter through all the items to look for wood in the item materials.  Then use map to return the title of each item.
var woodItem = items.filter(function(item){
  return item.materials.includes('wood')
})
var woodTitle = woodItem.map(function(item){
  return item.title
})
console.log(woodTitle)
//my information is in an array.  need to get it out of the array.



//question 5
//show me how to find which items made wtih eight or more materials
var muchoMaterials = items.filter(function(items){
  return items.materials >= 8
})
var titleOfMaterials = muchoMaterials.map(function(item){
  return item.title
})
console.log(titleOfMaterials)

// keep getting an empty array.



//question 6
//show me how to calculate how many items were made by their sellers
