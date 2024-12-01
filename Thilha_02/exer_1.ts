class ContaBancaria {
  
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular; 
        this.saldo = saldoInicial; 
    }

    
    depositar(valor: number) {
        if (valor > 0) { 
            this.saldo += valor; 
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    }

  
    sacar(valor: number) {
        if (valor > 0 && valor <= this.saldo) { 
            this.saldo -= valor; 
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }
}


const minhaConta = new ContaBancaria("Thiago José", 1000);
minhaConta.depositar(500); 
minhaConta.sacar(200); 