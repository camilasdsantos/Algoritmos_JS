const nascimento ={
    dia:16,
    mes:02,
    ano:1992,
    exibir: function(){
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
};

console.log(nascimento.exibir());

nascimento.dia =31;
nascimento.mes= 07;
nascimento.ano= 2022;
console.log(nascimento.exibir());

