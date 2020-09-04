// const prices = items
//   .map(function (item) {
//     console.log(prices)

//     const total = items.reduce(function (a, b) {
//       return a + b.price
//     }, 0)
//     return  total / price.length

//     return prices
//   }).join('')

// document.querySelector("#answer1").innerHTML = prices

const filtered = items.filter(function (item) {
  if (item.price > 14) {
    return item.price
  } else if (item.price < 18) {
    return item.price
  } else {
    return false
  }
}) 
const filtered2 = filtered
  .map(function (item) {
    return item.price
  })
  .join("")

document.querySelector("#answer2").innerHTML = filtered2
