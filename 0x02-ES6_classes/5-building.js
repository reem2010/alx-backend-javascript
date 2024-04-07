export default class Building {
  constructor(sqft) {
    if (!(new.target === Building)) {
      this.evacuationWarningMessage();
    }
    this.sqft = sqft;
  }

  set sqft(sqft) {
    if (!(typeof (sqft) === 'number')) {
      throw TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = sqft;
  }

  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }
  // eslint-disable-next-line
  evacuationWarningMessage() {
    throw Error('Class extending Building must override evacuationWarningMessage');
  }
}
