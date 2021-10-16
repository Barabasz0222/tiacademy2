// let i=0;
// for(let x=0; x < 10; x++){
//     console.log(`O valor da interação é ${x} o x mais ele mesmo é ${i++}`);
// }

// let Pessoas = {
//     nome: "Steve Roger",
//     idade: 90,
//     heroi: "Capitão America"
// }

// for(let propriedades in Pessoas){
//     console.log(Pessoas.nome);
//     console.log(Pessoas.idade);
//     console.log(Pessoas.heroi);
// }


// let frutas = ["Melancia", "Manga", "Banana", "Uva"];

// for(let nomeFruta of frutas){
//     console.log(nomeFruta);
// }

// let Herois = [
//     {
//         identidadeSecreta: "Steven Roger",
//         heroi: "Capitão America",
//     },
//     {
//         identidadeSecreta: "Tony Stark",
//         heroi: "Homem de Ferro",
//     }
// ];

// Herois.push({indentidadeSecreta:"Petter Park", heroi:"Homem Aranha"});
// Herois.push({indentidadeSecreta:"Bruce Benner", heroi:"Hulk"});
// // let marvel = Herois[1].identidadeSecreta;
// // console.log(marvel);

// for(let marvel of Herois){
//     //console.log(marvel);
//     for(let m in marvel){
//         console.log(`${m} ---> ${marvel[m]}`);
//     }
// }


//Exercicio

let palavra = "Hulk";

function invertePalavra(p, t=''){
    for(let i=(p.length-1); i>=0; i--){
        console.log(p[i]);
    } 
}
invertePalavra('Diana')

//for in: Objetos;
//for of; Array;
