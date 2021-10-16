// function Pessoa(nome) {
//     this.nome = nome;

// }

// Pessoa.prototype.msg = this.msg = function () {
//     alert("Olá " + this.nome)
// }

// let NovaPessoa = new Pessoa("Lucas");
// let OutraPessoa = new Pessoa("Camila");
// NovaPessoa.msg();
// OutraPessoa.msg()
// // console.log(NovaPessoa.nome);

// console.log(NovaPessoa); 




// let Pessoa2 = {
//     'nome': '',
//     'idade':''
// }
// // console.log(Pessoa2);
// Pessoa2.__proto__.msg = function(){
//     alert("Olá" + Pessoa2.nome)
// }
// let P = Pessoa2;
// P.nome = "Lucas";
// P.msg()
// console.log(P);


// let Pessoa3 = [
//     {
//         'nome':'Lucas',
//         'idade':'17',
//         'sexo':'M'
//     },
//     {
//         'nome':'Camila',
//         'idade':'14',
//         'sexo':'F'
//     },
//     {
//         'nome':'Josiane',
//         'idade':'42',
//         'sexo':'F'
//     },
//     {
//         'nome':'Rodinei',
//         'idade':'45',
//         'sexo':'M'
//     }
// ]

// let NPessoa = Pessoa3;
// console.log(`Existem ${NPessoa.length} pessoas cadastradas`);
// console.log(NPessoa[1].nome);

//exercicio
let palavra = "Lucas";
(function(){
    document.write(`Está palavra tem ${palavra.length} caracteres <br>`);
    document.write(`Está palavra ${palavra} ficou ${palavra.toUpperCase()} <br>`);
    document.write(`A letra ${palavra[3]} é o 3° caracter <br>`);
    document.write(`${palavra}ficou ${palavra.replace(palavra[3], 'X')}`);
})(palavra)

console.log(palavra);