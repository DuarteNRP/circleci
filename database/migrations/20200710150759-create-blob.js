module.exports = {
  down: async queryInterface => {
    await queryInterface.dropTable('blobs');
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blobs', {
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
    });
  },
};
