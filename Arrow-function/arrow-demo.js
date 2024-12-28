// Simple arrow function that prints a fixed name
const printName = () => {
    console.log("Hello John")
}

// Arrow function that takes a name parameter and prints a personalized greeting
const printGivenName = (name) => {
    console.log(`Hello ${name}`)
}

// Function calls to demonstrate usage
printName()            // Prints: Hello John
printGivenName("John Doe")  // Prints: Hello John Doe