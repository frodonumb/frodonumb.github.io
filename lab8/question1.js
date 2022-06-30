/*
Question 1:
    ➢ Create an object student using object literal which has
        ➢ Properties: firstName:String, lastName:String, grades: Array
        ➢ Methods:
            ➢ inputNewGrade(newGrade): push newGrade to grades
            ➢ computeAverageGrade(): return average of grades
        ➢ Create an Array with multiple students which are created using Object.create();
            ➢ Then compute the average grade for all students in the array
*/

const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
    }
}

const stu1 = Object.create(student);

stu1.firstName = 'John';
stu1.lastName = 'Smith';
stu1.inputNewGrade(88);
stu1.inputNewGrade(98);
stu1.inputNewGrade(86);
stu1.inputNewGrade(80);

const stu2 = Object.create(student);
stu2.firstName = 'John2';
stu2.lastName = 'Smith2';
stu2.inputNewGrade(85);
stu2.inputNewGrade(95);
stu2.inputNewGrade(85);
stu2.inputNewGrade(70);
const students = [stu1, stu2];
const result = students.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(result);