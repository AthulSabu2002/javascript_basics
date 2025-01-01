// Base Event constructor function
function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
}

// Base Event prototype methods
Event.prototype.getDetails = function() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
}

Event.prototype.cancelEvent = function() {
    return 'Event Cancelled'
}

// Concert constructor function inheriting from Event
function Concert(name, location, date, headliner) {
    // Call parent constructor with current context
    Event.call(this, name, location, date)
    // Add Concert-specific property
    this.headliner = headliner
}

// Set up inheritance chain
Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert

// Override getDetails method for Concert
Concert.prototype.getDetails = function() {
    // Call parent method and extend with Concert-specific info
    const eventBasics = Event.prototype.getDetails.call(this)
    return `${eventBasics} Headliner: ${this.headliner}`
}

// Create Concert instances and test inheritance
const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
const concert2 = new Concert("Happy days", "Highlands Park", "2024-08-08", "Dave Notes")
const concert3 = new Concert("Lush Vibes", "Wembley", "2024-03-08", "Si Twig")

// Display results
console.log(concert.getDetails())
console.log(concert2.getDetails())
console.log(concert3.getDetails())