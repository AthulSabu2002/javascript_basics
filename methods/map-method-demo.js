// Array of distances walked in miles
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

// Conversion factor from miles to kilometers
const conversionFactorMilesToKm = 1.6

// Function to convert miles to kilometers using map
function convertMilesToKms() {
    // Map over each distance and convert to KM with month index
    return distanceWalkedMilesArr.map(function (distanceMiles, index) {
        return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`
    })
}

// Display the converted distances
console.log(convertMilesToKms())
