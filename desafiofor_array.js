//Desafio percorrer do penultimo elemento até o primeiro, pulando de dois em dois.
const numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 24, 33 , 17, 3, 22, 11, 10, 13, 8, 2];

//se eu quero acessar o ultimo elemento, é preciso pegar o tamanho do array
// menos 2 para pegar o indice
// + que zero
// precisa decrementar
for (let i = numeros.length -2; i>= 0; i -=2 ){
        console.log(numeros [i]);
}