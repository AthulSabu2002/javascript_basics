const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: function(){
        //this
        // console.log(this)
        this.score++   
    }
}

console.log(gamer)
gamer.incrementScore()
console.log(gamer)
