'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    mobile: DataTypes.STRING,
    gmail: DataTypes.STRING,
    password: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM("User", "Admin"),
      defaultValue: "User",
    },
    status: {
      type: DataTypes.ENUM("Active", "InActive"),
      defaultValue: "InActive",
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};