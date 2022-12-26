'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ParentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Parents',
          key: 'id'
        },
      },
      ChildId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Children',
          key: 'id'
        },
      },
      GrandChildId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'GrandChildren',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Assets');
  }
};