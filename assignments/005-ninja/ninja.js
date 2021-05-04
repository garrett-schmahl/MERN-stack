class Ninja{
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
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

const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();