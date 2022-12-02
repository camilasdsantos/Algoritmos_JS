//quando vc não define nada, o que uma função retorna?(undefined)
function semRetorno(){
    console.log("função foi chamada!")
}

let a=3;
let b= a*7+10;
let c = semRetorno();

console.log(a, b, c);