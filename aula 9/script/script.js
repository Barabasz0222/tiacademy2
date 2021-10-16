//concat: Junta dois ou mais arrays;

// let nomes = ["Lucas", "Josiane", "Rodinei", "Camila", "Nos todos"];
// let nomes2 = ["Miguel", "Nadir", "Alzira", "Wilson"];
// let todosOsNomes = nomes.concat(nomes2);
// console.log(nomes);
// console.log(nomes2);
// console.log(todosOsNomes);
// let qtdArraysNomes = `O array nomes possui ${nomes.length} elemenstos`;
// console.log(qtdArraysNomes);
/////////////////////////////////////////////////////////////////////////

//indexOF: Procura um determinado elemntos de um array, retorna uma posição;

// let nomes2 = ["Miguel", "Nadir", "Alzira", "Wilson"];
// console.log(nomes2.indexOf("Nadir"));
// let buscaNome="Lucas";
// if (nomes2.indexOf(buscaNome) !=(-1)) {
//     alert(`Eu encontrei o nome ${buscaNome} e está na posição ${nomes2.indexOf(buscaNome)}`)
//     }else{
//         alert(`Não encontrei o ${buscaNome}`)
//     }
/////////////////////////////////////////////////////////////////////////

//join: Transforma elementos de um array em uma string;

// let nomes2 = ["Miguel", "Nadir", "Alzira", "Wilson"];
// console.log(nomes2);
// console.log(nomes2.join());
/////////////////////////////////////////////////////////////////////////

//push: insere elementos no fim de um array;

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.push("Maçã", "Laranja");
// console.log(frutas);
// let insertFruta = "Amora";
// if (frutas.indexOf(insertFruta) ==-1) {
//     console.log(`A fruta ${insertFruta} não esta na lista`);
//     frutas.push(insertFruta);
// }else{
//     console.log(`A fruta ${insertFruta} já esta na lista`);
// }
// console.log(frutas);
/////////////////////////////////////////////////////////////////////////

//pop: Remove o ultimo elemento de uma array;

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.pop();
// console.log(frutas);
/////////////////////////////////////////////////////////////////////////

//reverse: Inverte a ordem dos elemesntos de um array;

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.reverse();
// console.log(frutas);
// console.log(frutas[0]);
/////////////////////////////////////////////////////////////////////////

//shift: Remove o primeiro elemento de um array;

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.shift();
// console.log(frutas);
/////////////////////////////////////////////////////////////////////////

//sort: Ordena elemntos de um array em ordem crescente;

// let numeros = ['200', '2', '1', '189', '67'];
// let alfa = ['n', 'p', 'c', 'a', 'b', 'j'];
// numeros.sort();
// console.log(numeros);
/////////////////////////////////////////////////////////////////////////

//toString: Converte um array em uma string e retorna esta string;

// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// console.log(frutas.toString());
/////////////////////////////////////////////////////////////////////////

//unshift: Insere um elemento no inicio do array;
/////////////////////////////////////////////////////////////////////////

//splice: Corta ou remove um elemento de um array em umponto indicado. Agrupar com indexOf;

// let nomes = ["Rodinei", "Josiane", "Lucas", "Camila"];
// let indice = nomes.indexOf("Sol")
// let novosLista = nomes.splice(indice,1);
// console.log(novosLista);
/////////////////////////////////////////////////////////////////////////

//Exercicio

function valorImc(nome, altura, peso) {

    altura = Number(altura);
    peso = Number(peso);
    let imc = peso / (altura*2)
    console.log("Nome:", nome);
    console.log("Altura:", altura);
    console.log("Peso:", peso);
    console.log("IMC:", imc);
}
pesoPessoa = prompt("Digite seu peso:");
alturaPessoa = prompt("Digite sua altura");
nomePessoa = prompt("Digite seu nome");

valorImc(nomePessoa, alturaPessoa, pesoPessoa);