const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GroupUsUser extends Model {
    static associate(models) {
      this.hasMany(models.GroupUsSection);
    }
  }
  GroupUsUser.init(
    {
      name: DataTypes.STRING,
      googleId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'GroupUsUser',
    }
  );
  return GroupUsUser;
};
