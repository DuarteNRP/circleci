const Sequelize = require('sequelize');

class TypesModel extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        created_at: {
          allowNull: false,
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATE,
        },
        slug: {
          allowNull: false,
          type: Sequelize.TEXT,
          unique: true,
        },
        type_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        updated_at: {
          allowNull: false,
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATE,
        },
      },
      {
        sequelize,
        tableName: 'types',
      }
    );
  }
}

module.exports = TypesModel;
