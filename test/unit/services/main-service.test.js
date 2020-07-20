const faker = require('faker');
const Service = require('services/service');
const service = new Service();

/* Test variables declaration */
const existingID = 5;
const obj = {
  [faker.random.objectElement()]: faker.random.word(),
  [faker.random.objectElement()]: faker.random.word(),
};

let serializedData;

describe('Main Service', () => {
  describe('Test serialize method', () => {
    it('should serialize object', () => {
      serializedData = service.serialize(obj);
      expect(typeof serializedData).toBe('string');
    });

    it('should deserialize object', () => {
      const result = service.deserialize(serializedData);

      expect(typeof result).toBe('object');
    });
  });

  describe('Test toJSON method', () => {
    it('should throw', () => {
      expect(() => {
        service.toJSON();
      }).toThrow();
    });
  });

  describe('Test get method', () => {
    it('should get number of rows', async () => {
      const result = await service.get({ blob_id: existingID });

      expect(result).toEqual(1);
    });
    it('should return all rows', async () => {
      const result = await service.get();

      expect(result).toEqual(expect.any(Number));
    });
  });

  describe('Test find method', () => {
    it('should return object existing in database', async () => {
      const result = await service.find({ blob_id: existingID });
      const expectedArray = [
        {
          id: expect.any(Number),
          products: expect.any(Array),
          storeId: expect.any(Number),
          userId: expect.any(Number),
        },
      ];

      expect(result).toEqual(expect.arrayContaining(expectedArray));
    });
  });

  describe('Test checkDefinedFor method', () => {
    it('should return true if defined', () => {
      const isDefined = service.checkDefinedFor('mock data');

      expect(isDefined).toBeTruthy();
    });

    it('should return false if not defined', () => {
      const isDefined = service.checkDefinedFor();

      expect(isDefined).toBeFalsy();
    });
  });

  describe('Test checkDuplicatedFor method', () => {
    it('should return true', async () => {
      const isDuplicated = await service.checkDuplicatedFor(
        '9e63df2196cec5f3dc2ff5ebcf4ac8b4303815884bea1be4152fcc6dc8b37ffe'
      );

      expect(isDuplicated).toBeTruthy();
    });

    it('should return false', async () => {
      const isDuplicated = await service.checkDuplicatedFor('as');

      expect(isDuplicated).toBeFalsy();
    });
  });
});
