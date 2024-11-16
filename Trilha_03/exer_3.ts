

abstract class Pagamento {
    
    abstract processar(): void;
}


class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    
    private validarCartao(): boolean {
        
        return this.numeroCartao.length === 16 && /^\d+$/.test(this.numeroCartao);
    }

    
    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento processado com cartão: ${this.numeroCartao}`);
        } else {
            console.log(`Número do cartão inválido: ${this.numeroCartao}`);
        }
    }
}


class PagamentoBoleto extends Pagamento {
    private codigoBoleto: string;

    constructor() {
        super();
        this.codigoBoleto = this.gerarCodigoBoleto();
    }

    
    private gerarCodigoBoleto(): string {
        
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }

    
    processar(): void {
        console.log(`Boleto gerado com código: ${this.codigoBoleto}`);
    }
}


function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => {
        pagamento.processar();
    });
}


const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567812345678"), 
    new PagamentoCartao("1234"),              
    new PagamentoBoleto()                      
];


processarPagamentos(pagamentos);