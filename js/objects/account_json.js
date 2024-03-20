class Account {

    constructor(acc_no, cust_name, balance = 0) {
        this.acc_no = acc_no
        this.cust_name = cust_name
        this.balance = balance
    }
    
}


acc_obj = [ new Account(12345, "Fincher", 100000), 
            new Account(67890, "Bong", 500000),
            new Account(24680, "David", 250000)
        ]

a1 = new Account(12345, "Fincher", 100000)
a2 = new Account(67890, "Bong", 500000)
a = [a1, a2]

acc_obj.forEach(n => console.log(JSON.stringify(n.acc_no), JSON.stringify(n.cust_name)))
a.forEach(n => console.log(JSON.stringify(n.acc_no), JSON.stringify(n.cust_name)))

    

