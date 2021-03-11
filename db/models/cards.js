module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'Cards',
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'cards',
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
