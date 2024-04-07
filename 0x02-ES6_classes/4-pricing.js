import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    if (!(typeof (amount) === 'number')) {
      throw TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._amount = amount;
  }

  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be a Currency');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
