// let m = '1';
// console.log(typeof m );

// if(typeof m === 'number'){
//     console.log(`O dado informado é um number ${m}`);
// }else{
//     console.log(`O dado informado não é um number ${m}`);
// }
//////////////////////////////////////////////////////////////////////////////

window.onload=function() {
    // alert("Olá povo do JS")

//     const botao = document.getElementById('btn');
//     const txtBox = document.querySelector("#txtBox");
//     const caixa = document.querySelector("#caixa");

//     botao.addEventListener('click', function(){
//         caixa.innerHTML += ' ' +txtBox.value + ' ';
//     })
function tabuada(numero){

        let tabuada =0;
        if( typeof numero !== 'number'){
            alert("Digite um numero numerico válido")
        }else{
            if(numero < 1 || numero > 10){
                alert("Digite um numero entre 1 e 10")
            }else{
                console.log(`Tabuada do ${numero}`);
                while (tabuada <=10) {
                    console.log(`${numero} x ${tabuada} = ${(numero * tabuada)} `);
                    tabuada++;
                    
                }
            }
        }
}
tabuada(5);
}

