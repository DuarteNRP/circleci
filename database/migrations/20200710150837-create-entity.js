module.exports = {
  down: async queryInterface => {
    await queryInterface.dropTable('entities');
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('entities', {
      blob_id: {
        allowNull: false,
        references: {
          key: 'blob_id',
          model: {
            tableName: 'blobs',
          },
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
          model: {
            tableName: 'types',
          },
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
    });
  },
};
