'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user)
    }
  };
  order.init({
    userId: DataTypes.INTEGER,
    ammount: DataTypes.FLOAT,
    product: {
      type: DataTypes.STRING,
      validate: {
        min: 0.01,
      },
    },
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};