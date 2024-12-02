interface Produto{
    id:number;
    nome:string;
    preco:number;

}

class ItemLoja implements Produto{

    id:number;
    nome:string;
    preco:number;
     
    constructor(id:number,nome:string,preco:number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

}

const item = new ItemLoja(1, "Shorts", 59.90);
console.log(item);