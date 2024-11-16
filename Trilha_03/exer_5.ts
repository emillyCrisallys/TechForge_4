
abstract class Funcionario {
    private nome: string;
    private salario: number;
  
    constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getSalario(): number {
      return this.salario;
    }
  
    abstract calcularBonus(): number;
  }
  
  
  class Gerente extends Funcionario {
    calcularBonus(): number {
      return this.getSalario() * 0.10;
    }
  }
  
  
  class Operario extends Funcionario {
    calcularBonus(): number {
      return this.getSalario() * 0.05;
    }
  }
  
  
  function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    for (const funcionario of funcionarios) {
      const salarioComBonus = funcionario.getSalario() + funcionario.calcularBonus();
      console.log(`O salário de ${funcionario.getNome()} com bônus é de: R$ ${salarioComBonus.toFixed(2)}`);
    }
  }
  
  
  const funcionarios: Funcionario[] = [
    new Gerente('Thiago', 5300),
    new Operario('Duda', 3060),
    new Gerente('José', 7800),
    new Operario('Ana', 2500)
  ];
  
  calcularSalarioComBonus(funcionarios);