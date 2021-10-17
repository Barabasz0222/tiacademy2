window.onload = function(){
    //     let CestaDeFrutas = []
    
    //         function inserirFruta( fta ){
    //             CestaDeFrutas.push( fta )
    
    //             qtdItemCestaFrutas();
    
    //         }
    
    //         function qtdItemCestaFrutas(){
    //             console.log("Há " +CestaDeFrutas.length+ " fruta(s) na cesta");
    //         }
    // inserirFruta("Banana");
    // inserirFruta("Laranja");
    // inserirFruta("Uva");
    // inserirFruta("Nevascaranga");
    
    let produtos = [
        {descricao:'Mamão', preco:8.20},
        {descricao:'Banana', preco:4.70},
        {descricao:'Laranja', preco:1.50},
        {descricao:'Melancia', preco:2.50},
        {descricao:'Nevascaranga', preco:10.50}
    ]

let listaProdutos = document.querySelector("#produtos");

    // let lis = document.createElement('li');
    // listaProdutos.appendChild(lis).textContent = "Melancia";
    

    // let lis2 = document.createElement('li');
    // listaProdutos.appendChild(lis2).textContent = "Mamão";
    
    for(let itens of produtos){
        let lis = document.createElement('li');
        for(let prod in itens){
            //listaProdutos.appendChild(lis).textContent = itens[prod];
            if(prod == 'descricao'){
                listaProdutos.appendChild(lis).textContent = itens[prod];
            }else{
                listaProdutos.appendChild(lis).setAttribute('class', 'itemFruta');
                listaProdutos.appendChild(lis).setAttribute('data-preco', itens[prod]);

            }
        }
    }
let cestaDoCliente = [];
    let selecionarItem = document.querySelectorAll("#produtos > li")
    let compraDoCliente = document.querySelector('#cestaDoCliente')
    let valorTotalCompra = document.querySelector("#mostraTotalCompra")
    let total=0;
    selecionarItem.forEach(function(item){
            item.addEventListener('click', function(){

                if(cestaDoCliente.indexOf(item.textContent) != -1){
                    alert("Este item já está na sua lista")
                }else{
                    total += Number(item.dataset.preco)
                    cestaDoCliente.push(item.textContent);
                    let itemCesta = document.createElement('li');
                    compraDoCliente.appendChild(itemCesta).textContent = item.textContent;
                    valorTotalCompra.value = total.toFixed(2);

                }
                
            })
    })
    
    
    }