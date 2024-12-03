class Cart {
    private items: { name: string; price: number }[] = [];
    private totalPrice: number = 0;

    addItem(name: string, price: number): void {
        this.items.push({ name, price });
        this.totalPrice += price;
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }

    getItems(): { name: string; price: number }[] {
        return this.items;
    }
}

class Payment {
    private status: string = "Pending";

    processPayment(): void {
        this.status = "Paid";
    }

    getStatus(): string {
        return this.status;
    }
}

class Shipping {
    private status: string = "Not Shipped";

    updateShippingStatus(): void {
        this.status = "Shipped";
    }

    getStatus(): string {
        return this.status;
    }
}

class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;

    constructor(cart: Cart, payment: Payment, shipping: Shipping) {
        this.cart = cart;
        this.payment = payment;
        this.shipping = shipping;
    }

    addItemToCart(name: string, price: number): void {
        this.cart.addItem(name, price);
    }

    processPayment(): void {
        this.payment.processPayment();
    }

    updateShippingStatus(): void {
        this.shipping.updateShippingStatus();
    }

    getOrderSummary(): string {
        return `Items: ${JSON.stringify(this.cart.getItems())}\n` +
               `Total Price: ${this.cart.getTotalPrice()}\n` +
               `Payment Status: ${this.payment.getStatus()}\n` +
               `Shipping Status: ${this.shipping.getStatus()}`;
    }
}
