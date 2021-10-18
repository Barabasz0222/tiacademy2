

let m = '5';

try{
    if(typeof m != 'number') throw new Error("Digite um numero");
if(m < 0) throw new Error ("O numero não pode ser negativo");
if(m % 1 !== 0)throw new Error("Digite um numero inteiro");
} catch(error){
    console.log(`o erro é ... ${error}`);
}finally{
    console.log("Cheguei no finally");
}
