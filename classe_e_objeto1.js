//para construir classes não precisa de parenteses

class Data {
    dia = 11
    mes = 12
    ano=1970

    constructor(dia, mes, ano){
        this.dia =dia;
        this.mes =mes;
        this.ano =ano;

    }

}
const d1 = new Data();

console.log(typeof d1);
console.log(typeof Data);


d1.dia=24;
d1.mes =12;
d1.ano=2021;
console.log(d1);

const d2 = new Data(31,12, 2021);
console.log(d2);

console.log(typeof d1);
console.log(typeof Data);