// Challenge:
// 1. Predict what will be logged to the console.

function getWeather() {
    return "Today's weather is warm and sunny"
}

console.log(getWeather()) // What will this log?  Today's weather is warm and sunny

console.log(getNews()) // What will this log?  A new swimming pool has opened in the town centre...

function getNews() {
    return "A new swimming pool has opened in the town centre..."
}

console.log(trafficInfo) // What will this log?  reference error

let trafficInfo = 'All roads are busy right now'