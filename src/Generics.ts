function wrapInArray<T>(item: T): T[]{
    return [item];
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({name: "Masala Chai", price: 25 })

function pair<A,B>(a:A,b:B): [A,B]{
    return [a,b]
}

pair("Masala Chai",25)
pair("masala",{flavor:"Ginger", price: 30})

pair("Masala Chai",[{flavor:"Gionger"},{flavor:"Cardamom"}])

interface Box<T>{
    content: T;
}

const numberBox: Box<number> = {content: 42}
const stringBox: Box<string> = {content: "Hello, World!"}

//Partial<T>

interface ApiPromise<T>{
    status: number;
    data: T;
    error?: string;
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "Masala Chai"}
}