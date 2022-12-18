'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_no: {
        type: Sequelize.STRING
      },
      user_id :Sequelize.INTEGER,
      service :Sequelize.INTEGER,
      quantity :Sequelize.INTEGER,
      status: {
        type: Sequelize.ENUM("Pending", "Verified","Canceled","Placed"),
        defaultValue: "Pending",
      },
      url : Sequelize.STRING,
      response_form_third_party: Sequelize.JSON,
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
    await queryInterface.dropTable('Orders');
  }
};