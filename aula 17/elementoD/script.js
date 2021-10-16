window.onload = function(){

    let produtos = [
        {descricao:'Bolacha', preco:2.20},
        {descricao:'Pão', preco:3.70},
        {descricao:'Refrigerante', preco:8.50},
        {descricao:'Pamonha', preco:10.50}
    ]

    const listaProdutos = document.querySelector("#listaProdutos");
    const Total = document.querySelector("#total");

    (()=>{
        let totalzinho=0;
        for(let pro of produtos){
            const filhoLi = document.createElement("li");

            for(listaP in pro){
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
                    totalzinho += pro[listaP];
                }else{
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`
                }
                
            }
        }
            Total.value = totalzinho.toFixed(2);
    })(produtos)








}