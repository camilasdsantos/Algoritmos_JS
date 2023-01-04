const numeros =[1,2,3,4,5,6];
//primeiro indice começa com zero
//colocar i = cmeçando com zero
//colocar o i como menor que < o tamanho de indice do array


for(let i=0; i< numeros.length; i++){
    console.log(i, numeros[i]);
}
console.log("de dois em dois")
for(let i=0; i< numeros.length; i+=2){
    console.log(i, numeros[i]);
}