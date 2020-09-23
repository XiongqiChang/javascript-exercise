// TODO 11: 在这里写实现代码
import Person from '../practice_1/person';

class Student extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.clazz}.`;
  }
}
export default Student;
