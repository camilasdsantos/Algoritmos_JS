// string com "" aspas normal
// string com '' as simples
// string com o simbolo da crase no template de strig
// nesse ultimo caso incluindo valores de variaveis e usando ${} como simbolo da linguagem:
//Exemplo:

const i=2;
const j=4;

console.log("i= " + i + ",j =" + j);
console.log('i= ' + i + ',j =' + j);

console.log(`i= ${i}, j= ${j}`);
console.log(`1+2 = ${1+2}`);
console.log(`valor gerado foi: ${Math.random()}`);