const Sequelize = require('sequelize');

class BlobsModel extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        blob: {
          allowNull: false,
          type: Sequelize.JSONB,
        },
        blob_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT,
        },
        created_at: {
          allowNull: false,
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATE,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
        sha: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        updated_at: {
          allowNull: false,
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATE,
        },
      },
      {
        sequelize,
        tableName: 'blobs',
      }
    );
  }
}

module.exports = BlobsModel;
