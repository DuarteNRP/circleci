const _ = require('lodash');
const crypto = require('crypto');
const asJsonCanonical = require('fast-json-stable-stringify');

const BlobsModel = require('database/models/blobs-model');
const EntitiesModel = require('database/models/entities-model');

const unimplemented = (depth = 1) => {
  const { stack } = new Error();
  const { groups } = /^at (?<caller>[^(]+) \(.+$/.exec(
    _.trim(stack.split('\n')[_.parseInt(depth)])
  );

  throw new Error(
    `FATAL: Please implement method '${groups.caller}' \
in class '${this.constructor.name}'`
  );
};

class Service {
  constructor(options = {}) {
    this.id = options.id;
    this.blobsModel = BlobsModel;
    this.entitiesModel = EntitiesModel;
  }

  async find(parameters, offset = 0, limit = 1) {
    try {
      const results = await this.blobsModel.findAll({
        limit,
        offset,
        where: {
          ...parameters,
        },
      });

      const parsedResults = [];

      _.forEach(results, item => {
        const id = parseInt(item.blob_id, 10);

        item = this.deserialize(item.blob);
        item.id = id;
        parsedResults.push(item);
      });

      return parsedResults;
    } catch (err) {
      throw new Error(err);
    }
  }

  async get(parameters) {
    try {
      return await this.blobsModel.count({
        where: {
          ...parameters,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async save() {
    try {
      const { obj } = this.toJSON();
      const serializedData = this.serialize(obj);
      const sha = this.shasumFor(serializedData);
      const actionResult = await this.getAction(sha, serializedData);

      return actionResult;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAction(sha, serializedData) {
    const isDuplicated = await this.checkDuplicatedFor(sha);

    if (isDuplicated) {
      throw new Error('Duplicated entry');
    }
    const isDefined = this.checkDefinedFor(this.id);
    const createBlobResult = await this.createBlob(serializedData, sha);

    if (isDefined) {
      const updateBlobResult = await this.updateBlob();
      const updateEntityResult = await this.updateEntity(
        createBlobResult.blob_id
      );

      return {
        createBlobResult,
        updateBlobResult,
        updateEntityResult,
      };
    }

    const createEntityResult = await this.createEntity(
      createBlobResult.blob_id
    );

    return { createBlobResult, createEntityResult };
  }

  async updateBlob() {
    try {
      return await this.blobsModel.destroy({
        where: {
          blob_id: this.id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateEntity(blobId) {
    try {
      return await this.entitiesModel.update(
        {
          blob_id: blobId,
        },
        {
          where: {
            blob_id: this.id,
          },
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  async createBlob(serializedData, sha) {
    try {
      return await this.blobsModel.create({
        blob: serializedData,
        sha,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async createEntity(blobId) {
    try {
      return await this.entitiesModel.create({
        blob_id: blobId,
        type_id: 1,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async checkDuplicatedFor(sha) {
    try {
      const existingRows = await this.find({ sha }, 0, 10);

      if (_.isEmpty(existingRows)) {
        return false;
      }

      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  checkDefinedFor(data) {
    try {
      if (data) {
        return true;
      }

      return false;
    } catch (err) {
      throw new Error(err);
    }
  }

  shasumFor(content) {
    try {
      return crypto.createHmac('sha256', content).digest('hex');
    } catch (err) {
      throw new Error(err);
    }
  }

  serialize(obj) {
    if (obj) {
      try {
        return asJsonCanonical(obj);
      } catch (err) {
        throw new Error(err);
      }
    } else {
      throw new Error('No value was passed');
    }
  }

  deserialize(str) {
    return JSON.parse(str);
  }

  toJSON() {
    unimplemented();
  }
}

module.exports = Service;
