//any 타입
const a: any[] = [1, 2, 3, 4]
const b: any = true

// console.log(a + b);

//unknown 타입
let c: unknown = "1"

if (typeof c === 'number') {
    let d = c+1
    console.log(d);
}

if (typeof c === 'string') {
    let d = c.toUpperCase();
    console.log(d);
}
