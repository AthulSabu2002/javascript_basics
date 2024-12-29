function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function notifyUser() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}


try{
    await uploadFile()
    await processFile()
    await notifyUser()
}catch(error){
    console.log(error)
}
finally{
    console.log("All steps completed")
}



