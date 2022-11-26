let x = ""
console.log(x = "Change")

let asdf: string[] = ['kim', 'gml', 'wo']
// console.log(asdf)

let a: number[] = [1, 2];
let b: string[] = ["il", "1"]
let c: boolean[] = [true]
console.log(a, b, c)

const playerX: {
    name: string,
    age?: number; //선택적 타입 다루기 "?"
} = {
    name: "gmlwo"
}
// console.log(playerX)

if (playerX.age && playerX.age < 10) {

}

//Alias 타입 생성법
type Player = {
    name: string,
    age?: number
}

const gmlwo: Player = {
    name: "gmlwo"
}
// console.log(gmlwo)

//argument 타입 지정방법
export function playerMaker(name: string): Player {
    return {
        name,
    }
}

export const playerMaker2 = (name: string , age:number): Player => ({ name , age})
const P1 = playerMaker2("HJ",25)
// console.log(P1)