//encadeamento de onjetos e atributos

const funcionario = {
    codigo: 16555963,
    nome: {
        primeiroNome: 'Ana',
        sobrenome: 'Silva Flores',
    },
    endereco: { 
        cidade: 'Petropolis',
        bairro: 'Mosela',
        logradouro: 'Rua Capitão Fantástico',
        numero: 123,
        complemento: 'Apto 105, bloco 5',
        uf: 'Rj',
        cep: '25645111',
        pontodeReferencia: ['Servidão Ao lado da Padaria', 'Rua a esquerda do Mercado',' casa azul de janelas brancas'],
    },
    telefone:{
        telefoneFixo: 0000-0000,
        telefoneCelular: 0101-0202,
    },
    previdênciaPrivada: true,
    planoOdontologico: true,
    planoDeSaude: true,
    valeTransporte: false,
    valeGasolina: false,
    AuxilioHomeOffice: true,
    dependentes:02,
    nomeFilhos: ['Antonio Silva Flores', 'Aline Silva Flores', 'José Carlos Junior']
};


console.log(funcionario['endereco']['logradouro']);
console.log(funcionario.endereco);
console.log(funcionario.endereco.pontodeReferencia[3]);