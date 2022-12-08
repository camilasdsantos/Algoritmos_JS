function executar (funcao) {
    if (typeof funcao === "function") {
        console.log(funcao ());
    }
}
function bomDia() {
    return "bom dia";
}
executar(bomDia); // central da aula <-------

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);