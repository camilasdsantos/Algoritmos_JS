const notas =[7, 8, 3, 5, 10, 9, 8, 8];
let valores =' ';
//foreach
for(let nota of notas ){//percorrer cada elemento do array notas e pegar as notas
    //OF = valores ---- e IN = indices
    valores += nota + ' ';
}
console.log(valores);

let indices=' ';

for (let indice in notas){
    indices += indice + ' ';
}
console.log(indices);