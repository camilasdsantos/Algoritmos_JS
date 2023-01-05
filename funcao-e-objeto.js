//function função construtora - construir um objeto


//quando vc usa uma função construtora, a letra fica maiuscula, por convenção  e boas praticas
function Data(dia=01, mes=01, ano=1970) {  
    this.dia= dia;
    this.mes= mes;
    this.ano= ano;

    this.exibir =function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data(); //palavra chave para função construtora: new // em outras linguagens seria classes
const d2=  new Data(24, 12, 2023);
const d3=  new Data(31,12 , 2023);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());


console.log(d1);
console.log(d2);
console.log(d3);

