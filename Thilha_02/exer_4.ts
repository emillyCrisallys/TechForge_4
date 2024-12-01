class Temperatura {
   
    valor: number;

    constructor(valor: number) {
        this.valor = valor; 
    }

   
    paraFahrenheit(): number {
        return (this.valor * 9/5) + 32; 
    }

    
    paraKelvin(): number {
        return this.valor + 273.15; 
    }
}


const temperaturaCelsius = new Temperatura(25); 
console.log(`Temperatura em Celsius: ${temperaturaCelsius.valor}°C`); 
console.log(`Temperatura em Fahrenheit: ${temperaturaCelsius.paraFahrenheit()}°F`); 
console.log(`Temperatura em Kelvin: ${temperaturaCelsius.paraKelvin()} K`); 