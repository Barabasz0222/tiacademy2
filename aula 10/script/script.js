//match: Procura uma palavra em uma string;

 let nome = "Lucas Barabasz"
// console.log(nome.match('B'));
///////////////////////////////////////////

//serach: Procura pela ocorrencia e retornando a posição na cadeia da string;
// console.log(nome.search(/l/i));
// console.log(nome[0]);
///////////////////////////////////////////

//replace: Substitui uma string por outra
// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium, optio corrupti voluptates cum suscipit temporibus necessitatibus adipisci minima deleniti!'
// let strOutra = str.replace(/sit/gi, 'não');
// console.log(strOutra);
///////////////////////////////////////////

//localeCompare: Compara efetua a comparação entre duas strings;
// let gato = "gato";
// let outroGato = "gato";
// console.log(gato.localeCompare(outroGato));
///////////////////////////////////////////

//toString: Converter um valor qualquer em uma string;
// let num = Number('1');
// console.log(num.toString());
///////////////////////////////////////////

//toLowerCase: Conversão de um string inteira em caracteres minusculos;
// let str = 'Lorem ipsum dolor SIT amet consectetur adipisicing elit. Officia praesentium, optio corrupti voluptates cum suscipit temporibus necessitatibus adipisci minima deleniti!'
// console.log(str.toLowerCase());

// let gato = "gato";
// let outroGato = "GATO";

// let cat1 = gato.toLowerCase;
// let cat2 = outroGato.toLowerCase;
///////////////////////////////////////////

//toUpperCase: Conversão de um string inteira em caracteres maiusculo;
// let str = 'Lorem ipsum dolor SIT amet consectetur adipisicing elit. Officia praesentium'
// console.log(str.toUpperCase());
///////////////////////////////////////////

//trim: Faz a remoção de espaços antes e depois da string especificada.
// let str = "           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium       "
// document.write(str.trim() +"<br>");
// console.log(str.trim());
// let str2 = 'Lorem ipsum dolor SIT amet consectetur adipisicing elit. Officia praesentium'
// console.log(str2);
///////////////////////////////////////////

//Nan: Quando uma string for passada para Number, parseInt ou parseFloat e não consiga efetuar a conversão
//será retornando NaN (Not as Number);
// let num = 'ooo';
// console.log(isNaN('8i'));
// if (!isNaN(num)) {
//     console.log('Isto é um numero');
// }else{
//     console.log('Isto não é um numero');
// }
///////////////////////////////////////////

//toFixed: Analisa um valor flutuante e retorna uma string conforme o parametro da casa;
// let valor = 2.456;
// console.log(valor.toFixed(2));
///////////////////////////////////////////

//toLocalString: irá retornar uma string com uma representação da moeda definida como o parametro
//currency

// console.log(valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));