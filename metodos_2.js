const numeros =[1, 2, 3, 4, 5, 8]
numeros.splice(1,1);    //splice deleta elementos dentro de um array, passo o parametro - indice e a quantidade de elementos a ser excluidos a partir desse indice
console.log(numeros);
//outro metodo de exclusão é o pop. ele ilimina o ultimo elemento.
numeros.pop();
console.log(numeros);
numeros.pop();
console.log(numeros);
//se quiser saber qual foi excluido por ultimo: jogar numeros.pop dentro do console.log
console.log(numeros.pop());
console.log(numeros.pop());
console.log(numeros);
