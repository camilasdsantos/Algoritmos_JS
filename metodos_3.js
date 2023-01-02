const numeros =[1, 2, 3, 4, 5, 6, 86, 7, 8, 9, 10]

// forma de percorrer cada um dos itens
for(let i = 0; i< numeros.length; i++) {
    console.log(numeros[i]);
}

for( let n of numeros){
    console.log(n);
}

numeros.forEach(function() {
console.log('Dentro do for each')
});// para cada elemento dentro do array ele irá chamar essa função