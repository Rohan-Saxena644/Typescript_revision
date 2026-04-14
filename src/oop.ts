// class Chai{
//     flavor: string;
//     price: number;

//     constructor(flavor: string, price: number){
//         this.flavor = flavor;
//         this.price = price;
//     }
// }

// const masalaChai = new Chai("Ginger", 25)
// masalaChai.flavor =  "masala"

//typescript access modifiers

class Chai{
    public flavor: string = "Masala";
    private price: number = 4;

    private specialIngredient: string = "Cardamom"

    reveal(){
        return this.specialIngredient //ok
    }

    protected shopName = "Chai corner"
}

class Shop{
    protected shopName: string = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

class Walet{
    #balance = 100;

    getBalance(){
        return this.#balance
    }
}

const w = new Walet();

class Cup{
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

class ModernChai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if(value>5){
            throw new Error("Too much sugar")
        }
        this._sugar = value
    }
}

const c = new ModernChai();

c.sugar = 3;

console.log(c.sugar)

class EkChai{
    static shopName = "Chaicode coffee"

    constructor(flavor: string,price: number){}
}

console.log(EkChai.shopName);


// class banaye but object nahi bane

abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing Chai");
    }
}

// composition instead of inheritance

class Heater{
    heat(){}
}

class ChaiMaker{

    private heater : Heater

    constructor(heater: Heater){
        this.heater = heater;
    }

    make(){
        this.heater.heat()
    }
}