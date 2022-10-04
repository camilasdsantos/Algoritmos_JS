// simbolo de atribuição "="
// o simbolo de atribuiçao pode ser usado junto dos operadores aritméticos:
//{+, - , *,/,%
//+= atribuição aditiva
//-= atribuição subtrativa
//*= atribuição multiplicativa
//= atribuição + string = concatenação
//etc

let x = 1;//atribui
console.log(x);
x = 10;//substitui a atribuição anterior
console.log(x);
x = x +10; // soma um novo valor a variavel existente
console.log(x);
x +=1;
console.log(x);//soma um novo valor a variavel existente ,
// ou seja faz o mesmo que a expressão anterio x=x +1;
x -=3;
console.log(x);// atribuição subtrativa
x*=10;
console.log(x);//atribuição multiplicativa;
x/=2;
console.log(x);
x+=1;
console.log(x); // atribuição divisiva
x%=2;
console.log(x);// atribuição de modulo (resto)

// atribuição com operadores aritméticos também funciona para valores textuais :

let y="Texto";
console.log(y);
y+=", mais Texto";
console.log(y);