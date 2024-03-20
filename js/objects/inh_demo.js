class Person {

    constructor(name, email) {
        this.name = name
        this.email = email
    }

    setEmail(email) {
        this.email = email
    }

    show() {
        console.log(this.name)
        console.log(this.email)
    }

}

class Player extends Person {

    constructor(name, email, game) {
        super(name, email)
        this.game = game
    }

    show() {
        super.show()
        console.log(this.game)
    }

    setGame(game) {
        this.game = game
    }

}

class Employee extends Person {

    constructor(name, email, job) {
        super(name, email)
        this.job = job
    }

    show() {
        super.show()
        console.log(this.job)
    }

    setJob(newjob) {
        this.job = newjob
    }

}

p1 = new Person("Jack", "jack@yahoo.com")
p1.show()

p2 = new Player("Ronaldo", "ronaldo@gmail.com", "Football")
p2.show()

p3 = new Employee("Mark", "mark@facebook.com", "CEO")
p3.show()