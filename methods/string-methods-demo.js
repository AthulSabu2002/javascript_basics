const sentence = "i went to Australia and i saw a shark"

/*
Challenge:
    1. Change the lowercase i’s to uppercase.
*/

console.log(sentence.replaceAll('i', 'I'))


const sentence2 = "i went to Australia and i saw a shark"

console.log(sentence2.replaceAll(/\b(i)\b/g, 'I'))