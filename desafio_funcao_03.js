//Desafio : um sistema que pega as 3 notas de um aluno, descarta a menor, e faz a média das outras duas e joga em um status

const nota1 =7.8;
const nota2 = 2.1;
const nota3 = 6.7;

function minimo (n1, n2) {
    if (n1 <= n2){
        return n1;
    } else {
        return n2;
    }// outra forma de escrever a mesma coisa:
    // return n1 <= n2 ? n1 : n2; (com o operador ternario)
}
console.log(minimo(nota1, nota2))

//Para comparar 3 valores ou mais em uma função (funções so utilizam dois valores por vez) é só repetir a função
// A ideia é dividir questões grandes em funções simples (dividir, para conquistar)
//funções complexas não são tão reaproveitaveis, quanto mais simples, mais reutilizavel fica o código

//console.log(minimo(nota1, minimo(nota2, nota3)))

//função média

function media (n1, n2, n3){
    const menorNota= minimo(nota1, minimo(nota2, nota3));
    if( menorNota === n1){
        return (n2 + n3 )/2;
    } else if (menorNota === n2) {
        return (n1 + n3 )/2;
    } else {
        return (n1 + n2 )/2;
    }
}

console.log(media(nota1, nota2, nota3));
// função para jogar a média no status

function mediaParaStatus (media){
    if( media >=7){
        return "Aprovado!";

    }else if (media >= 4){
        return "recuperação";

    }else {
        return "Reprovado";
    }
}
const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log( `o resultado final do aluno é ${statusFinal}!!!!`);