const getSpendAlert = (name, amount) => {
    return `Warning! Hey ${name}! You just spent £${amount}!`
} 

console.log(getSpendAlert('Tom', 100))