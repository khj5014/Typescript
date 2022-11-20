let x = ""
console.log(x = "Change")

let asdf: string[] = ['kim', 'gml', 'wo']
console.log(asdf)

let a: number[]= [1,2];
let b: string[] = ["il","1"]
let c: boolean[] = [true]
console.log(a,b,c)

const playerX: {
    name:string,
    age?:number; //선택적 타입 다루기 "?"
}={
    name:"gmlwo"
}
console.log(playerX)

if(playerX.age && playerX.age < 10){

}

//Alias 타입 생성법
type player = {
    name:string,
    age?:number
}

const gmlwo:player = {
    name:"gmlwo"
}
console.log(gmlwo)

//argument 타입 지정방법
function playerMaker(name:string) : player{
    return{
        name,
    }
}
const gmlwo2 = playerMaker("gmlwo123")
gmlwo2.age = 12

const playerMaker2 = (name:string):player =>({name})
const gmlwo3 = playerMaker2("gmlwo123")
gmlwo3.age = 12