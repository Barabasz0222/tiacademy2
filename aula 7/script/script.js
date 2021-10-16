//Exercicio 8
function verificaMaiorNum(num1, num2) {
    if (num1 > num2) {
        console.log("O numero " +num1+ " é maior que o numero "+num2);
    }else{
        console.log("O numero " +num1+ " é menor que o numero "+num2);
    }
    
}

// verificaMaiorNum(5, 3);

function teste() {
    alert("Estou na function teste");
    return nome;
}

// console.log(teste());

// let msg = (nome)=>{
//     return nome
// }
// console.log(msg("José"));

// (function(produto, preco){
//     alert("O produto é "+produto +" e o preço é R$ "+ preco);
// })("Bolacha", 2.35);

let v1 = prompt("Digite valor 1");
let v2 = prompt("Digite valor 2");

const soma = (valor1, valor2)=>{
    let resultado = Number (valor1) + Number (valor2);
    console.log(resultado);
}

soma(v1, v2)