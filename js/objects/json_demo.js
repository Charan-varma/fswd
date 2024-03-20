book = {title: "The Outliers", price: 550}

book_json = JSON.stringify(book)
console.log(book_json)

books = [{title: "The Outliers", price: 550 }, { title: "World is flat", price: 650 }] 
books_json = JSON.stringify(books)
console.log(books)

console.log(JSON.parse(book_json))

class Product {
    constructor(name, p) {
        this.name = name;
        this.price = p;
    }
    sellingPrice() {
        return this.sellingPrice
    }
}

p = new Product("Dell XPS 9500", 2000000);
console.log(JSON.stringify(p))  