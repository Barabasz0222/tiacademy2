window.onload = function(){

//     const ulPai = document.querySelectorAll("#ulPai");
//     alert(ulPai);

//     ulPai.forEach(function(lista){
//         lista.addEventListener('click',function(elemento){
//             alert(elemento.target.innerHTML);
//         })
//     })

/*
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

*/


const tab = document.querySelector('#tabuada');
const btn = document.querySelector('#calcular')
const resp = document.querySelector('#resposta')

btn.addEventListener('click', function(){

    let tabuada =0;
    let numero = Number(tab.value);
        if( typeof numero !== 'number'){
            resp.innerHTML = "Digite um numero numerico válido"
        }else{
            if(numero < 1 || numero > 10){
                resp.innerHTML = "Digite um numero entre 1 e 10"
            }else{
                console.log(`Tabuada do ${numero}`);
                while (tabuada <=10) {
                    resp.innerHTML += `<br>${numero} x ${tabuada} = ${(numero * tabuada)} `;
                    tabuada++;
                    
                }
            }
        }
    
})




}