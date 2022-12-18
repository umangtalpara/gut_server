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
    orderNo: {
      type: DataTypes.STRING,
      defaultValue: function () {
        // return uuidv4();
        return new Date() - 0;
      },
    },
    userId :DataTypes.INTEGER,
    userInfo :DataTypes.JSON,
    status: {
      type: DataTypes.ENUM("Pending", "Verified","Canceled","Placed"),
      defaultValue: "Pending",
    },
    service_platform: {
      type: DataTypes.ENUM("YouTube", "FaceBook","TicTok","Twitter","Instagram"),
      defaultValue: "YouTube",
    },
    service_type: {
      type: DataTypes.ENUM("Likes", "Share" ,"Subscribers","Comments", "Followers"),
      defaultValue: "Likes",
    } ,
    Count : DataTypes.INTEGER ,
    Url : DataTypes.STRING,
    response_form_third_party: DataTypes.JSON

  }, {
    sequelize,
    modelName: 'orders',
  });

  return order;
};