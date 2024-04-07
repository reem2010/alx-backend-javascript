export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    if (!(typeof (name) === 'string')) {
      throw TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set length(length) {
    if (!(typeof (length) === 'number')) {
      throw TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = length;
  }

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set students(students) {
    if (!(Array.isArray(students))) {
      throw TypeError('Length must be a number');
    }
    if (!(students.every((val) => typeof (val) === 'string'))) {
      throw TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = students;
  }

  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }
}
