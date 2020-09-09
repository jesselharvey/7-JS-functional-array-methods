// const prices = items
//   .map(function (item) {
//     console.log(prices)
//     const total = items.reduce(function (a, b) {
//       return a + b.price
//     }, 0)
//     return total / item.length
//   })
//   .join("")

// document.querySelector("#answer1").innerHTML = prices

// const filtered = items.filter(function (item) {
// return item.price
// })
// const filtered2 = filtered
//   .map(function (item) {
//     return item.price
//   })
//   .join("")

// document.querySelector("#answer2").innerHTML = filtered2

const sum = items.reduce(function (x, y) {
  return x + y.price
}, 0)
const average = (sum / items.length).toFixed(2)
document.querySelector(
  "#answer1"
).innerHTML = `Average price of all items is $${average}`

//------

const filtered = items.filter(function (item) {
  return item.price >= 14 && item.price <= 18
})
const finalFiltered = filtered
  .map(function (item) {
    return `<li>${item.title}</li>`
  })
  .join("")
document.querySelector("#answer2").innerHTML = finalFiltered

//-----

const gBPfilter = items.filter(function (item) {
  console.log(item)
  return item.currency_code === `GBP`
})
const gBPfiltered = gBPfilter.map(function (item) {
  return `<li>Item: ${item.title}</li><li>Price: ${item.price}</li><br>`
})
document.querySelector("#answer3").innerHTML = gBPfiltered
