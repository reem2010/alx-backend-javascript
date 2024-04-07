export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set location(location) {
    if (!(typeof (location) === 'string')) {
      throw TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._location = location;
  }

  get location() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }

  set size(size) {
    if (!(typeof (size) === 'number')) {
      throw TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._size = size;
  }

  get size() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
