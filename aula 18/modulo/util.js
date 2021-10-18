window.onload = function(){
    function calcular(idProduto, resultado){
        const preco          = document.querySelectorAll (`#${idProduto} > li`)
        const valorResultado = document.querySelector(`#${resultado}`)
        let totalzinho=0;
        for(let i of preco){
            totalzinho += Number(i.dataset.preco);
        }

        valorResultado.value = totalzinho

    }
    function removeProdutos(id){
        const lista = document.querySelectorAll(`#${id} > li`)

        for(let produto of lista){
                produto.addEventListener('click',function(){
                produto.remove()
                calcular('produtos','SomaTotal');

            })
        }
    }



    removeProdutos('produtos');
    calcular('produtos','SomaTotal');
}

export {calcular, removeProdutos}