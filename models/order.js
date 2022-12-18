'use strict';
const {
  Model
} = require('sequelize');
// const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    order_no: {
      type: DataTypes.STRING,
      defaultValue: function () {
        // return uuidv4();
        return new Date() - 0;
      },
    },
    user_id :DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM("Pending", "Verified","Canceled","Placed"),
      defaultValue: "Pending",
    },
    service : DataTypes.INTEGER ,
    quantity : DataTypes.INTEGER ,
    url : DataTypes.STRING,
    response_form_third_party: DataTypes.JSON

  }, {
    sequelize,
    modelName: 'Order',
  });

  return order;
};