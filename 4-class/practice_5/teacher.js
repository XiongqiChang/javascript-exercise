// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }
  introduce() {
    if (this.clazz === undefined) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.introduce()} I am a Teacher. I teach Class ${this.clazz}.`;
  }
}
