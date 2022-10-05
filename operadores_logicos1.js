// "E e OU e ou exclusivo" --- And, or, xOr e not (Xor --- ou exclusivo) 
//o != tambem funciona nesse caso como or exclusivo
//conceito "tabela verdade"
// not - negacao logica
// not é um operador unário

let temDinheiro= false;
let  temSol= true;
let  carroEstaNaGaragem= true;

let ResultadoE= " 1# Vai pro shopping? ";
ResultadoE += temDinheiro && temSol;
console.log(ResultadoE);

let ResultadoOu = "2# Vai pro shopping? "

ResultadoOu += temSol || carroEstaNaGaragem;
console.log(ResultadoOu);

//"E" = && para operações logicas - & para operaçoes binarias resultado 0 e 1)
//ou = || (pipe)operações logicas - & para operaçoes binarias resultado 0 e 1)
//ou exclusivo para operações binárias = ^
// ou exclusivo para operações lógicas != ou o extritamente diferente !==
//ou exclusivo para operações lógicas !== (extritamente diferente)
// Not (negação) ! -> exemplo console.log(!true);

console.log(true !== false);
console.log(true !==  true);
console.log(false !== false);
console.log(false !== true );

console.log("não verdadeiro: " + !true);
console.log("não falso : " + !false);
