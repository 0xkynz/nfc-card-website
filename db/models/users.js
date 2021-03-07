const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'Users',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      displayName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      aboutMe: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      tiktok: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      facebook: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      twitter: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      card_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          // Do stuff
          user.password = await bcrypt.hashSync(user.password, 10);
        },
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
}
