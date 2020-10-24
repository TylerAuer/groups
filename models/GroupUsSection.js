'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GroupUsSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.GroupUsUser);
    }
  }
  GroupUsSection.init(
    {
      data: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'GroupUsSection',
    }
  );
  return GroupUsSection;
};
