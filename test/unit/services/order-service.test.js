const _ = require('lodash');
const setupMock = require('../setup');
const OrderService = require('services/order-service');

let orderService;

/* Test variables declaration */
const { mockObject, finalPrice } = setupMock();

beforeEach(() => {
  orderService = new OrderService(mockObject);
});

let id;

describe('Orders', () => {
  describe('Test constructor', () => {
    it('should have a structure containing', () => {
      expect(orderService).toEqual(
        expect.objectContaining({
          products: expect.any(Array),
          storeId: expect.any(Number),
          userId: expect.any(Number),
        })
      );
    });
  });

  describe('Test save method', () => {
    it('should create a new row', async () => {
      const result = await orderService.save();

      id = result.createBlobResult.blob_id;
      expect(result).toBeTruthy();
    });

    it('should update Entity', async () => {
      orderService.id = id;
      orderService.storeId = 3;
      const result = await orderService.save();

      expect(result).toBeTruthy();
    });
  });

  describe('Test getFinalPrice method', () => {
    it('should return the sum of all individual prices', () => {
      const result = orderService.getFinalPrice();

      expect(result).toEqual(finalPrice);
    });

    it('should return the sum of all individual prices if string', () => {
      const obj = {
        products: [
          {
            price: '200',
          },
          {
            price: '200',
          },
        ],
      };

      let finalPrice = 0;

      _.forEach(obj.products, product => {
        finalPrice += parseFloat(product.price);
      });

      const orderService = new OrderService(obj);
      const result = orderService.getFinalPrice();

      expect(result).toEqual(finalPrice);
    });
  });

  describe('Test toJSON', () => {
    it('should be defined', () => {
      const orderService = new OrderService();

      expect(orderService.toJSON()).toBeDefined();
    });

    it('should return object containing', () => {
      const { obj } = orderService.toJSON();

      expect(obj).toEqual(
        expect.objectContaining({
          products: expect.any(Array),
          storeId: expect.any(Number),
          userId: expect.any(Number),
        })
      );
    });
  });
});
