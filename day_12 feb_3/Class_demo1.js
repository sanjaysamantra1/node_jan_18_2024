// ES-5 Class

function Student(roll, name, course) {  // constructor function / Class
    this.roll = roll;
    this.name = name;
    this.course = course;
}

let std1 = new Student(101, 'Jyoti', 'NodeJS');
let std2 = new Student(102, 'Praveeb', 'React');

console.log(std1, std2)
