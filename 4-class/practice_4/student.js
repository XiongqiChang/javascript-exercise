// TODO 16: 在这里写实现代码
import Person from './person';

class Student extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }

  introduce() {
    return `${this.basic_introduce()} I am a Student. I am at Class ${this.clazz}.`;
  }
}
export default Student;
