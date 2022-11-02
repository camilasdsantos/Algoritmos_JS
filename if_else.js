const hora = 19;
let saudaçao;
if (hora <12 ){

    saudaçao = "Bom dia!";
} 
else {
    if (hora <18 ) {
    saudaçao = "Boa tarde !";
     } else {
    saudaçao = "Boa noite !";
     }
} 

console.log(saudaçao)