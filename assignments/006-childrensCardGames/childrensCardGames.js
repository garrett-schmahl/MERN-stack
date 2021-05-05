class Card{
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
}

class UnitCard extends Card{
    constructor(name,cost,stat){
        super(name,cost)
        this.stat = stat
    }

    attack(target){
        target.stat.health -= this.stat.power
        gameLog.push(this.name+" attacked "+target.name+" for "+this.stat.power+" damage ")
    }
}

class TrapCard extends Card{
    constructor(name,cost,effect,description){
        super(name,cost)
        this.effect = effect
        this.description = description
    }

    applyEffect(target){
        for (const [key,value] of Object.entries(this.effect)){
            target.stat[key] += value
            gameLog.push(target.name+" gained "+value+" "+key)
        }
    }
}

const gameLog = []

function gameState(){
    console.log("")
    console.log(redBeltNinja.name)
    console.log("Health:",redBeltNinja.stat.health)
    console.log("Power:", redBeltNinja.stat.power)
    console.log(blackBeltNinja.name)
    console.log("Health:",blackBeltNinja.stat.health)
    console.log("Power:", blackBeltNinja.stat.power)
    console.log("Log")
    for(let i=0;i<gameLog.length;i++){
        console.log(gameLog[i])
    }
    console.log("")
    console.log("")
}

const redBeltNinja = new UnitCard("Red Belt Ninja",3,{health:4,power:3})
const blackBeltNinja = new UnitCard("Black Belt Ninja",4,{health:4,power:5})

let description = "Increases target health by 3"
const hardAlgo = new TrapCard("Hard Algorithm",2,{health:3},description)

description = "Reduce target health by 2"
const unhandledPromiseRejection = new TrapCard("Unhandled Promise Rejection",1,{health:-2},description)

description = "Increase target power by 2"
const pairProgramming = new TrapCard("Pair Programming",3,{power:2},description)




gameState()
console.log(hardAlgo)
hardAlgo.applyEffect(redBeltNinja)
gameState()
unhandledPromiseRejection.applyEffect(redBeltNinja)
gameState()
pairProgramming.applyEffect(redBeltNinja)
gameState()
redBeltNinja.attack(blackBeltNinja)
gameState()