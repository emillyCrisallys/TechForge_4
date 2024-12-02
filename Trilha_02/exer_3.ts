class Produto {

    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome; 
        this.preco = preco; 
        this.quantidade = quantidade; 
    }

    
    calcularValorTotalEmEstoque(): number {
        return this.preco * this.quantidade; 
    }
}


const produto1 = new Produto("Camiseta", 29.99, 10); 
console.log(`Produto: ${produto1.nome}, Preço: R$${produto1.preco}, Quantidade: ${produto1.quantidade}`); 
console.log(`Valor total em estoque: R$${produto1.calcularValorTotalEmEstoque()}`); 