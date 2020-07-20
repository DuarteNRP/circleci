const _ = require('lodash');
const Service = require('./service');

class OrderService extends Service {
  constructor(options = {}) {
    super(options);
    this.products = options.products;
    this.userId = options.userId;
    this.storeId = options.storeId;
    this.finalPrice = this.getFinalPrice();
  }

  toJSON() {
    const obj = {
      products: this.products,
      storeId: this.storeId,
      userId: this.userId,
    };

    return { obj };
  }

  getFinalPrice() {
    let finalPrice = 0;

    _.forEach(this.products, product => {
      finalPrice += parseFloat(product.price);
    });

    return finalPrice;
  }
}

module.exports = OrderService;
