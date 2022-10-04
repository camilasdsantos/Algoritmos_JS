// "extritamente igual" ===
// == (Igual a ou Equal to) - é usado para comparação entre duas variáveis, 
//independentemente do tipo de dados da variável.
// === (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito,
// o que significa que ele irá verificar o tipo de dados e comparar dois valores.

let a = "1" //string
let b = 1 // inteiro 
let c = 1 // inteiro
console.log(a==b);
console.log(a===b);
console.log(c===b);

//comparando == os vaores darão iguais. "true"
// mas comparando === não, pois são tipos diferentes de dados. "false"

console.log(a !=b);//!= diferente
console.log( a !==b); //!== diferença estrita
console.log( c !==b)

