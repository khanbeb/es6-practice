class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Mollertak Udyon School"
    }
}

const student1 = new Student(12, "Sajal");
const student2 = new Student(27, "Munna");
console.log(student1, student2);
