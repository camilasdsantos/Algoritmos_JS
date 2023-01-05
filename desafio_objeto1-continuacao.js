
//forma 'rustica de fazer isso' (objeto de forma literal)

console.log('fazendo codigo da maneira "errada/literal:"')
const data1 ={
    dia:16,
    mes:02,
    ano:1992,
    exibir: function(){
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
};

const data2 ={
    dia:22,
    mes:05,
    ano:1988,
    exibir: function(){
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
};

const data3 ={
    dia:31,
    mes:07,
    ano:2022,
    exibir: function(){
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
};

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());


// forma clean code para fazer o mesmo com
// função e objeto:

console.log('fazendo codigo da maneira "correta com clean code e reaproveitamento de código:"')

function criarData(dia, mes, ano){
    return{
        dia: dia,
        mes: mes,
        ano: ano,
        exibir() { // tirar palavra function
            return `${this.dia}/ ${this.mes}/ ${this.ano}`;
        }
    };

}

const d1 = criarData(01, 01, 2001);
const d2 = criarData(02,02,2002);
const d3 = criarData(3,03, 2003);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());


