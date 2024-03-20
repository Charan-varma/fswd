class Student {

    static courses = new Map([["Java", 5000], ["Python", 5000],["C", 3000], ["C++", 4000], ["Full Stack Web Development", 6000], ["Java EE + Spring", 6000]])

    constructor(name, course, fee_paid = 0) {
        this.name = name
        this.course = course
        this.fee_paid = fee_paid
    }

    payment(amount) {
        this.fee_paid += amount
    }

    setCourse(course) {
        this.course = course
    }

    getDue() {
        return Student.courses.get(this.course) - this.fee_paid
    }

    getFee() {
        return Student.courses.get(this.course)
    }

}

s1 = new Student("Tyler", "Java")

console.log(s1.getDue())
console.log(s1.getFee())

s1.payment(3000)

console.log(s1.getDue())
console.log(s1.getFee())

s1.setCourse("Full Stack Web Development")
console.log(s1.getFee())
console.log(s1.getDue())

s2 = new Student("Vito", "C", 3000)
s3 = new Student("Durden", "Python", 4000)

var students = [s1, s2, s3]
console.log(students)
var result = students.forEach(n => {
    if (n.getDue() > 0){
        console.log("Student name : " + n.name + " \nDue Amount : " + n.getDue())
    }
})
