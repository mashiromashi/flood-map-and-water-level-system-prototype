module.exports = (sequelize, Sequelize) => {
  return (water = sequelize.define(
    "water",
    {
      currentWaterLevel: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "water"
    }
  ));
};
