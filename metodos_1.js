const numeros =[1, 2, 3, 4, 5]

numeros.push(6); // push adiciona um elemento
numeros[0] =102; // altera só o elemento de indice 0
numeros.join(',') //junta todos os elementos do array com determinado simbolo citado
numeros.concat() // concatenua mais elementos, gerando um novo array array
numeros.indexOf(4)
console.log(numeros.join(','));
console.log(numeros);
console.log(numeros.join(' - '));

console.log(numeros.includes(10));
console.log(numeros.includes(102));

const numeros2 = numeros.concat(7,8,9);
console.log(numeros2);

console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4));

