let A = 10;
let B = 28;
const operacao = "%"
let resultado;

if (operacao === "+"){
    resultado = A + B;
} else if (operacao === "-") {
    resultado = A - B;
} else if (operacao === "*") {
    resultado = A * B;
}else if (operacao === "/") {
    resultado = A / B;
} else {
    resultado = A%B;
}

console.log (resultado);