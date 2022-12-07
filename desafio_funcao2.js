//Parametro (nota) -> retorna conceito


function NotaAluno(nota){
   let conceito;
   switch(Math.ceil(nota)){
case 10: console.log( "A+"); break; 
case 9: console.log ("A"); break; 
case 8: console.log ("B+"); break; 
case 7:console.log("B"); break; 
case 6: console.log ("C+"); break; 
case 5: console.log ("C"); break; 
case 4: console.log ("D+"); break; 
case 3: console.log("D"); break; 
case 2: console.log("E+"); break;
case 1: console.log ("E"); break;
case 0: console.log( "F"); break; 
default: console.log('Conceito inválido!')   
}
return conceito
}
NotaAluno(7.5);


// Outra forma de fazer o mesmo seria:

function notaAluno2(nota2) {
    switch (Math.ceil(nota2)){ //math ceil pra arredondar a nota pra cima (uma nota 9.2 ia cair no default)
        case 10: return "A+";
        case 9: return "A";
        case 8: return "B+";
        case 7: return "B";
        case 6: return "C+";
        case 5: return "C";
        case 4: return "D+";
        case 3: return "D";
        case 2: return "E";
        case 1: return "E+";
        case 0: return "F";
        default: return null;
    }
}

console.log(`O conceito do Aluno Bruno é ${notaAluno2(7.5)}`);
console.log(`O conceito da Aluna Antonieta é ${notaAluno2(4.5)}`);// principio do reuso do código
console.log(`O conceito da Aluna Ana é ${notaAluno2(9.5)}`);
console.log(`O conceito da Aluna Ashley é ${notaAluno2(6.5)}`);