type ChaiOrder ={
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order:ChaiOrder){
    console.log(order);
}

function serveChai(order: {type: string; sugar: number; strong: boolean}){
    console.log(order);
}

// type TeaRecipe = {
//     water: number;
//     milk: number
// }

interface TeaRecipe  {
    water: number;
    milk: number
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

// type CupSize = "small" | "large"

interface CupSize {
    size: "small" | "large" 
}

class Chai implements CupSize {
    size: "small" | "large" = "large"
} 

// pls iska interface bana do for class
// type Response = {ok:true} | {ok: false}

// class myRes implements Response{
//     ok: boolean = true;
// }

// literal types
type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup : MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Hitesh"}
const u2: User = {username: "Hitesh",bio: "hitesh.ai"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Masterji",
    version: 1
}

// error as constant object
//cfg.appName ="ChaiCode"