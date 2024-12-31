function gamer(name, score) {
    return {
        name,
        score,
        incrementScore() {
            this.score++
        }
    }
}

const alice = gamer('Alice', 10)
const dave = gamer('Dave', 3)
const ash = gamer('Ash', 9)

alice.incrementScore()
dave.incrementScore()
ash.incrementScore()
dave.incrementScore()
ash.incrementScore()
console.log(alice)
console.log(dave)
console.log(ash)
