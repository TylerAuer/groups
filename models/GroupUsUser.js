const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GroupUsUser extends Model {
    static associate(models) {
      this.hasMany(models.GroupUsSection);
    }
  }
  GroupUsUser.init(
    {
      google_id: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      profile_pic: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'GroupUsUser',
    }
  );
  return GroupUsUser;
};
