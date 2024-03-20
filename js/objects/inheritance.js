class Product {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    sellingPrice() {
        return this.price
    }

}

class DiscountedPrice extends Product{

    constructor(name, price, discountRate) {
        super(name, price)
        this.discountRate = discountRate
    }

    sellingPrice() {
        let discount = super.sellingPrice() * this.discountRate / 100
        return this.price - discount
    }

}

p1 = new Product("Dell XPS 9500", 2000000)
console.log(p1.sellingPrice())

dp = new DiscountedPrice("Mac Pro", 2000000, 15)
console.log(dp.sellingPrice().toFixed(2))