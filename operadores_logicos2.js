let trabalho1= true;
let trabalho2= true;

let comprarTv50 =trabalho1 && trabalho2;
console.log('vamos comprar a TV de 50"?', comprarTv50); // And

let comprarTv32 = trabalho1 !== trabalho2;
console.log('vamos comprar a TV de 32"?',comprarTv32) ;//Xor (ou exclusivo)


let tomarSorvete = trabalho1 || trabalho2;
console.log('vamos comprar sorvete?"', tomarSorvete) ;//Or

let ficarEmCasa = !tomarSorvete;
console.log('vamos ficar em casa?"', ficarEmCasa) ;//Not

// obs: se quero imprimir numa string " (aspas duplas) escrevo a string com aspas simples '
// caso queira o contrário: se quero imprimir numa string ' (aspas simples) escrevo a string com aspas duplas "
// o barra \ também auxilia tirando o caracter especial da sua função especial;
// da para escrever a expressão console.log('vamos comprar a TV de 50"',trabalho1 && trabalho2) separando por vigulas
// a virgula também concatena  e adiciona espaço;

