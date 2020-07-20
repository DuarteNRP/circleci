const Sequelize = require('sequelize');

class EntitiesModel extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        blob_id: {
          allowNull: false,
          references: {
            key: 'blob_id',
            model: 'BlobsModel',
          },
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
        entity_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        type_id: {
          allowNull: false,
          references: {
            key: 'type_id',
            model: 'TypesModel',
          },
          type: Sequelize.INTEGER,
        },
        updated_at: {
          allowNull: false,
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATE,
        },
        updated_by: {
          defaultValue: null,
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        tableName: 'entities',
      }
    );
  }
}

module.exports = EntitiesModel;
