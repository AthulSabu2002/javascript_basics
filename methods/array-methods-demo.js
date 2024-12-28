const dailyStepsArr = [1000, 1200, 800, 1500, 1100, 1900, 1300]

// .every() returns true if every item passes the test.
const areAllOver10k = dailyStepsArr.every(function(stepCount) {
    return stepCount >= 10000
})

// .some() returns true if one or more items pass the test.
const areSomeOver10k = dailyStepsArr.some(function(stepCount) {
    return stepCount >= 10000
})

const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function(invoice) {
    return invoice > 1000
})

// .findIndex() returns the index of the first item that passes the test.
const invoiceIndexOver1k = invoicesUSDArr.findIndex(function(invoice) {
    return invoice > 1000
})

// .indexOf() gives us the index of a given item in the array.
// console.log(invoicesUSDArr.indexOf(26))

// .at() takes a positive or negative integer and returns the item at that index.
//Negative integers count back from the end of the array. 

console.log(invoicesUSDArr.at(-2))