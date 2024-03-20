class Product {

    static taxrate = 15

    static setTaxRate(newrate) {
        Product.taxrate = newrate
    }

    constructor(name, price, disrate = 10) {
        this.name = name
        this.price = price
        this.disrate = disrate
    }

    getSellingPrice() {
        let discounted = this.price - (this.price * this.disrate / 100)
        let tax = discounted * Product.taxrate / 100 
        return discounted + tax
    }

}

p1 = new Product("P1", 1000, 20)
p2 = new Product("P2", 5000)

Product.setTaxRate(20)

console.log(p1.getSellingPrice())
console.log(p2.getSellingPrice())