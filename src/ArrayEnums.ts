const chaiFlavors: string[] = ["Masala","Adrak"]
const chaiPrice: number[] = [10,20]

const ratings: Array<number>=[4.5,5.0]

type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    {name: "Masala", price:5},
    {name: "Adrak" , price:20},
] 



const cities: readonly string[] = ["Delhi","Jaipur"]
//cities.push("Pune")

const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

let ChaiTuple: [string,number];
ChaiTuple = ["Masala",20]
//chaiTuple = [20,"Masala"]

let userInfo: [string,number,boolean?]

userInfo = ["hitesh",100]
userInfo = ["hitesh",100,true]

const location: readonly [number,number] = [28.66,32.22]

const ChaiItems: [name: string, price: number] = ["Masala",25]

enum CupSize {
    SMAAL,
    MEDIUM,
    LARGE
}

const size = CupSize.Large

enum Status{
    PENDING = 100,
    SERVED, //101 automatically
    CANCELLED, //102 automatically
}

enum ChaiType{
    MASALA = "MASALA",
    GINGER = "GINGER"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
makeChai(ChaiType.MASALA)
//makeChai("masala")

//not prefered try to keep the data type same in standard praxctices
enum RandomEnum{
    ID = 1,
    NAME = "chai"
}


const enum Sugars{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.HIGH

let t: [string,number] = ["chai",10]
t.push("extra")