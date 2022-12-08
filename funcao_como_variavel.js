// Você pode colocar função dentro de uma variavel em JavaScript (nem toda linguagem apresenta isso)
//function anonima = função sem nome 
// uma função sem nome/ anonima pode ser armazenada numa variavel
//IIFE
const x =1;
let y =2;

const somar = function (a,b){
    return a+b;
}
//a função anonima só pode ser criada (sem gerar erro), sendo atribuida por uma variavel
console.log(somar (x,y ));