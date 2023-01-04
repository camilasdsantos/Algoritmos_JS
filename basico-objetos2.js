

let fn =3;
let fn2 = function () {

};

//function dentro de objeto


const produto = {
    nome:'ipad',
    preco: 5600,
    desconto: 0.5,
    precoFinal: function(){
        return this.preco *(1 - this.desconto);
    }
};

// usar this para referenciar (para o objeto se alto referenciar)
console.log (produto.nome);
console.log (produto.precoFinal());
