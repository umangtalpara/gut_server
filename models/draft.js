'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Draft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Draft.init({
    orderNo  : DataTypes.STRING,
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

  }, {
    sequelize,
    modelName: 'Draft',
  });
  return Draft;
};