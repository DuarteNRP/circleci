/* const _ = require('lodash');
const faker = require('faker');
const sequelizeClient = require('src/clients/sequelize-client');
const OrderService = require('services/order-service');

let orderService;

let db;

function setupProductsArray() {
  const products = [];

  let productsCount = faker.random.number({
    max: 4,
    min: 2,
  });

  while (productsCount > 0) {
    const item = {
      description: faker.fake('{{lorem.sentence}}'),
      id: faker.random.number(),
      name: faker.fake('{{lorem.word}}'),
      price: faker.random.number(),
    };

    products.push(item);
    productsCount--;
  }

  return products;
}

function setupOrdersObject(products) {
  const mockObject = {
    products,
    storeId: faker.random.number(),
    userId: faker.random.number(),
  };

  return mockObject;
}

function getFinalPrice(products) {
  let finalPrice = 0;

  _.forEach(products, product => {
    finalPrice += product.price;
  });

  return finalPrice;
}

function setupMock() {
  const products = setupProductsArray();
  const mockObject = setupOrdersObject(products);
  const finalPrice = getFinalPrice(products);

  return { finalPrice, mockObject, products };
}

beforeAll(async () => {
  db = sequelizeClient.init();
  const { mockObject } = setupMock();

  mockObject.id = 1;
  orderService = new OrderService(mockObject);
  await orderService.save();
});

afterAll(async () => {
  await db.sequelize.close();
});

module.exports = setupMock; */
