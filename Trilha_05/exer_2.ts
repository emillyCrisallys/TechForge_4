abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private items: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity; 
        } else {
            this.items[item] = quantity; 
        }
    }

    removeItem(item: string): void {
        delete this.items[item]; 
    }

    getInventory(): Record<string, number> {
        return this.items; 
    }
}

class StoreInventory extends Inventory {
    private items: Record<string, number> = {};
    private maxQuantity: number = 10; 

    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            if (this.items[item] + quantity <= this.maxQuantity) {
                this.items[item] += quantity;
            } else {
                console.log(`Não é possível adicionar ${quantity} de ${item}. Limite máximo atingido.`);
            }
        } else {
            if (quantity <= this.maxQuantity) {
                this.items[item] = quantity; 
            } else {
                console.log(`Não é possível adicionar ${quantity} de ${item}. Limite máximo atingido.`);
            }
        }
    }

    removeItem(item: string): void {
        delete this.items[item]; 
    }

    getInventory(): Record<string, number> {
        return this.items; 
    }
}