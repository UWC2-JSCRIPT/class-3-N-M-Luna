// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = function(...menuItems) {

  // Log all items and add their prices
  let subTotalPrice = 0
  menuItems.forEach((menuItem) => {
    subTotalPrice += menuItem.price
    console.log(`${menuItem.descr} - ${menuItem.price}`)
  })

  // Calculate tax and total
  const tax = subTotalPrice * .0725 // This is 7.25% of subtotal.
  const totalPrice = (subTotalPrice + tax).toFixed(2) // Total price, formatted

  // Log subtotal and total
  console.log(`Subtotal - ${subTotalPrice}`)
  console.log(`Total - ${totalPrice}`)
}


// Check
logReceipt({
  descr: 'Burrito',
  price: 5.99
}, {
  descr: 'Chips & Salsa',
  price: 2.99
}, {
  descr: 'Sprite',
  price: 1.99
});
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
