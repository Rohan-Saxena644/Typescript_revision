interface Chai{
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala:Chai = {
    flavor: "Masala Chai",
    price: 25
}


interface Shop{
    readonly name: string;
    readonly id: number;
}


const s: Shop = {id:1,name:"Chai Shop"}

interface DiscountCalculator{
    (price: number): number;
}

const apply50: DiscountCalculator = (price) => price * 0.5


interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine ={
    start() {
        console.log("Starting the machine")
    },
    stop() {
        console.log("Stopping the machine")
    }
}

interface ChaiRatings{
    [flavor: string]: number;
}

const ratings: ChaiRatings = {
    "Masala Chai": 4.5,
    "Ginger Chai": 4.0,
    "Cardamom Chai": 4.2
}

// main kam and unique feature of interfaces


interface User{
    name: string;
}

interface User{
    age: number;
}

const user: User = {
    name: "John",
    age: 30
}


interface A {a: string}
interface B {b: string}

interface C extends A,B{
    
}
