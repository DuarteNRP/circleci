module.exports = {
  down: async queryInterface => {
    await queryInterface.dropTable('types');
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('types', {
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
    });
  },
};
