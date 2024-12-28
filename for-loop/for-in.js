// Single character object with properties
const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

// Loop through each property name in the character object
// property will be 'title', 'emoji', or 'powers'
for (let property in character1) {
    console.log(character1[property])
}