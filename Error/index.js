
function checkUsername(userName) {
    // Check if username exists
    if (userName) {
        console.log(userName)
    } else {
        // Throw error if username is missing
        throw new Error('No username provided')
    }
}

// Test the function without a parameter - will throw error
checkUsername()