//currying é o processo de transformar uma função que espera vários argumetntos
// em uma função que espera um unico argumento e retorna outra função curried
// passar argumentos de forma "parcelada"/parcial

//currying é principio de programação funcional


// função normal:

function somar1 (a,b){
    return a+b;
}

console.log (somar1(5,4));
//função currying
function somar2(a) {
    return function (b) {
        return a + b;
    }
}
console.log(somar2(6)(7));

const somarMais10 =somar2(10);
console.log(somarMais10(5));
console.log(somarMais10(15));


//essa funcionalidade é usada para funcoes mais complexas terem partes dos parametros já resolvidos
//paradigma funcional
//exemplo operações com aplicação de imposto