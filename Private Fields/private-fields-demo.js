class Holiday {
    #destination
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }
}

const safari = new Holiday('Kenya', 1000)
// safari.destination = 'Tanzania'
console.log(safari)