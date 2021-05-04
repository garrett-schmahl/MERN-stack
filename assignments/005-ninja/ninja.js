class Ninja{
    constructor(name, health = 10, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(this.name)
        return this.name
    }

    showStats(){
        console.log(this.name)
        console.log("Strength:",this.strength)
        console.log("Speed:",this.speed)
        console.log("Health:",this.health)
        return this
    }

    drinkSake(){
        this.health+=10
        return this.health
    }
} 

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }

    speakWisdom(){
        super.drinkSake()
        console.log("The journey of a thousand miles begins with the first step... to the taxi that will take me to an airport so that I can fly first class. I like it when the stewards put umbrellas in my drink.")
        return this.health
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
