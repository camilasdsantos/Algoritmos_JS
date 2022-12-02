function sempreRetornaUm (){
    
    return 1;
}
function retornaTextoOuNumero (retornaTexto) { 
if (retornaTexto){
    return "sou um texto ";
} else {
    return 123;
}
}


let valor =sempreRetornaUm( ) + 999;
console.log (valor);

let texto = retornaTextoOuNumero (true);
console.log(texto);

console.log(retornaTextoOuNumero(false));