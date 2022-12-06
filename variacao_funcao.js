//4 tipos de função
//#1 a função com paraetros e retorno

function somar(a,b){
    return a + b;
}
let resultado = somar(11, 12);
console.log(resultado);
console.log(somar(11, 12));
// #2função COM parametro  e SEM retorno

function exibirMultiplicacao (a,b){
    console.log(a*b);
}

exibirMultiplicacao(10,21);
exibirMultiplicacao(10,112);

// #3 função SEM parametro  e COM retorno
function retornaDataAtual(){
    return new Date();
}

console.log(retornaDataAtual());

// #4 função SEM parametro  e SEM retorno
function exibirHoraAtual(){
console.log(new Date().getHours());
}
exibirHoraAtual();
