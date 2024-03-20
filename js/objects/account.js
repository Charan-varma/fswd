class Account {

    #balance

    constructor(customer, balance) {
        this.#balance = balance
    }

}

let a1 = new Account("steve", 10000)
console.log(a1.#balance)