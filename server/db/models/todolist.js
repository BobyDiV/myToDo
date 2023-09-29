const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todolist extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Todolist.init(
    {
      todo: DataTypes.STRING,
      check: DataTypes.BOOLEAN,
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Todolist',
    }
  );
  return Todolist;
};
