// Array of various ages
const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

// Filter ages to get only adults (18 and above)
const adults = ages.filter(function(age){
    return age >= 18
})

// Filter ages to get only children (below 18)
const children = ages.filter(function(age){
    return age < 18
})

// Display filtered results
console.log(adults)
console.log(children)

// Array of TV series objects with their details
const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]

// Filter series to find shows set in New York
const newYorkSeries = series.filter(function(show){
    return show.location === 'New York'
})

console.log(newYorkSeries)

// Filter series to find shows in thriller genre
const thrillerSeries = series.filter((s) => {
    return s.genres.includes("thriller")
})

console.log(thrillerSeries)