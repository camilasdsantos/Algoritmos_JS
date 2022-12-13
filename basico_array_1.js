//Array ---> arranjo (arranjo de dados Homogeneos ou não)
//tipo arranjo de flores
//forEach


//indice      0     1     2     3   4   5
const notas = [7.8, 6.7, 10 , 9.5, 7.8, 5.8];

//como acessar os dados de um Array:

console.log(notas);
console.log(notas[3]);
console.log(notas[5]);
console.log(notas[6]);// indice inesistente, resultado undefinied


//como alterar os dados de um array

notas [4] =8.7;
console.log(notas);

//notas sempre apontara pra esse array, não dá para notas="teste";
//notas sempre apontara para aquele array, nem mesmo trocar para notas = [1,2,3,]
// O que dá para mudar é o valor do conteudo interno do array
