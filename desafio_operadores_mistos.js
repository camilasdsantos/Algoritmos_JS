// 3 expressões que resultem em true (com operadores aritmeticos/operacionais/logicos)
let verdadeira1= 2+2<10-1 && 12===2*6;
let verdadeira2= 50/5>2*2 || 2<1;
let verdadeira3= !(1+2>10-1 && 12===2*6)// o resultado é falso mas cologando a negação na frente (afirmo que não é isso, tornando uma negativa verdadeira)

console.log(verdadeira1);
console.log(verdadeira2);
console.log(verdadeira3);
// 3 expressões que resultem em false (com operadores aritmeticos/operacionais/logicos)
let falso1= 1+2>10-1 && 12===2*6;
let falso2= 50/5<=2*2 || 2<1;
let falso3= !(50/5<=2*2 || 2===2);

console.log(falso1);
console.log(falso2);
console.log(falso3);