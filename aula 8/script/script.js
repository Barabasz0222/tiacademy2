// alert ("Está funcionando?")
let str = `Qualquer conteudo! `;
let str2 = `Uma outra string! ${str}`;


// console.log(str2);

// //Arrays é uma coleção de dados, constituido por elementos
// const frutas = ["Uva", "Banana", "Laranja", "Melancia"];

// let euGosto = `Eu gosto de ${frutas[0]}`;

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

const pessoa = [
    "José",
    23,
    "Solteiro",
    "Bola",
    1.70,
    cores = ["Azul", "preto", "vermelho", "salmao", "ocre"]    
];

let key = 3;
key++;
console.log(pessoa.length);
console.log(pessoa[5][key]);
 
// (function(pessoa) {
//     const jose = `Meu nome é ${pessoa[0]} eu tenho ${pessoa[1]} anos e sou ${pessoa[2]}
//     eu também gosto de jogar ${pessoa[3]}. Minha altura é de ${pessoa[4]}`
//     document.write(jose);
// })(pessoa)
