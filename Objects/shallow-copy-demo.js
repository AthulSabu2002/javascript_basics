const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    }  
    
const studentDetailsCopy = {}

Object.assign(studentDetailsCopy, studentDetails)

studentDetailsCopy.firstName = 'John'

console.log(studentDetailsCopy)
console.log(studentDetails)

/*
Challenge:
    1. Prove that what we have created here is a shallow copy.
*/