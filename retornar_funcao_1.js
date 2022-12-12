//função retornando função isso abre possibilidades para o paradigma de progamação funcional
function retornar () {
 function bomDia(){
    return "bom dia!!!!!";
 }
 return bomDia;
}
//Em javaScript conseguimos criar uma função dentro de outra

console.log(retornar);
console.log(retornar());
console.log(retornar()());