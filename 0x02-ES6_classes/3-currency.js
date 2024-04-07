export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(code) {
    if (!(typeof (code) === 'string')) {
      throw TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
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

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
