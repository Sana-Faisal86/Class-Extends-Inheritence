import chalk from "chalk";

// A class in TypeScript is a blueprint for creating objects with specific properties and methods. It encapsulates data and behavior into a single unit. Here's a concise definition:
// In this example, MyClass has properties property1 and property2, a constructor to initialize them, and a method method() for some functionality. Instances of MyClass can be created using new MyClass(), allowing access to its properties and methods.

class Student {
  name: string;
  age: number;
  rollNum: number;
  course: string;

  constructor(n1: string, age: number, rollnum: number, course: string) {
    this.name = n1;
    this.age = age;
    this.rollNum = rollnum;
    this.course = course;
  }
  student(): any {
    return `\n\tStudent name is ${chalk.black.bgGreen(
      this.name
    )},\n\tStudent age is ${chalk.black.bgGreen(
      this.age
    )}\n\tStudent rollnumber is ${chalk.black.bgGreen(
      this.rollNum
    )}\n\tStudent select course is ${chalk.black.bgGreen(this.course)}\n`;
  }
}
const student1 = new Student("Hamza", 13, 67648, "typescript."); //pass value for argument:
const student2 = new Student("Huzaifa", 18, 67649, "javascript.");
const student3 = new Student("Faisal", 34, 67668, "html/css.");

// console.log("\n\t\t", student1, "\n\t\t", student2, "\n\t\t", student3); <==== commentout and print simple object:

let stuData: Student[] = []; //use array method:

stuData.push(student1); //element push for empty array:
stuData.push(student2);
stuData.push(student3);

student1.name = "Umer"; // change name value for student1 object:
console.log(
  chalk.cyan.underline("\n\tFunction call ==>\n"),
  chalk.black.bgGray(student1.student()) // function calll for student1 object :
);

console.table(stuData);
