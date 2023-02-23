const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class Users extends Model {
  checkPassword(userPassword) {
    return bcrypt.compareSync(userPassword, this.password);
  }
}

Users.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newPassword) => {
        newPassword.password = await bcrypt.hash(newPassword.password, 10);
        return newPassword;
      },
      beforeUpdate: async (updatedPassword) => {
        updatedPassword.password = await bcrypt.hash(updatedPassword.password, 10);
        return updatedPassword;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Users',
    // Below is making it so that the username field must be unique
    indexes: [
      { unique: true, fields: ["user_name"] },
    ]
  },
);

module.exports = Users;