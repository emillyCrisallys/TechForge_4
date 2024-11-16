
class Animal {
    private energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    public comer(quantidade: number): void {
        this.energia += quantidade;
        console.log(`Energia aumentada em ${quantidade}. Energia atual: ${this.energia}`);
    }

    public statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }
}


class Leao extends Animal {
    constructor(energiaInicial: number) {
        super(energiaInicial);
    }

    public cacar(): void {
        const energiaGasta = 10;
        if (this['energia'] >= energiaGasta) {
            console.log("Leão está caçando...");
            (this as any)['energia'] -= energiaGasta; 
            console.log(`Energia gasta: ${energiaGasta}. Energia restante: ${this['energia']}`);
            this.comer(15);
        } else {
            console.log("Leão não tem energia suficiente para caçar.");
        }
    }
}

class Passaro extends Animal {
    constructor(energiaInicial: number) {
        super(energiaInicial);
    }

    public voar(): void {
        console.log("Pássaro está voando...");
        this.comer(5); 
    }
}


function demonstrarEnergia(animal: Animal) {
    animal.statusEnergia();
}


const leao = new Leao(25);
const passaro = new Passaro(31);

demonstrarEnergia(leao);
leao.cacar();
demonstrarEnergia(leao);

demonstrarEnergia(passaro);
passaro.voar();
demonstrarEnergia(passaro);
