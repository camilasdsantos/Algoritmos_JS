const data ={
    dia: 1,
    mes: 10,
    ano:2021,
};

console.log(data.dia);
console.log(data.mes);
console.log(data.ano );

// data é uma constante, mas os atributos internos de data são possíveis de alteração

// o que não é possivel é tentar atribuir um objeto diferente (tipo array - exemplo) a data que já esta determinada como objeto;

data.dia = 16;
data.mes =02;
data.ano=1992;

console.log(`${data.dia}/${data.mes}/${data.ano}`)