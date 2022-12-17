'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNo: {
        type: Sequelize.STRING
      },
      service_platform: {
        type: Sequelize.ENUM("YouTube", "FaceBook","TicTok","Twitter","Instagram"),
        allowNull: false,
        defaultValue: "YouTube",
      },
      service_type: {
        type: Sequelize.ENUM("Likes", "Share" ,"Subscribers","Comments", "Followers"),
        allowNull: false,
        defaultValue: "Likes",
      },
      Count: {
        type: Sequelize.INTEGER
      },
      Url : Sequelize.STRING,
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
    await queryInterface.dropTable('orders');
  }
};