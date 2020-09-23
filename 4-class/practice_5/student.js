// TODO 19: 在这里写实现代码
import Person from './person';

class Student extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }

  introduce() {
    const result = `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
    return result;
  }
}
export default Student;
