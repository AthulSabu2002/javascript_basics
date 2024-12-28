// Creating an array using array literal notation
const numbers = [100, 45, 67, 23, 50, 10]
console.log(numbers)

// Creating an array using Array constructor
const musicGenres = new Array('pop', 'rock')
console.log(musicGenres)

// Creating empty array and adding elements using push()
const music = [];
music.push('Rock');
console.log(music);

// Array can store different types of data (mixed array)
const mixedArr = [1, 'John', true]
console.log(mixedArr)

// Accessing array elements using index
console.log(musicGenres[0])

// Modifying array elements
musicGenres[0] = "song"
console.log(musicGenres)

// Multi-dimensional array (nested arrays)
const nestedGenres = [
  ['Rock', 'Pop', 'Country'],
  ['Soul', 'Hip Hop', 'Reggae'],
  ['Folk', 'Classical', 'Electronic'],
];

// Accessing elements in nested array
console.log(nestedGenres[1][2])