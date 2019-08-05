module.exports = (sequelize, Sequelize) =>{
    return (rain = sequelize.define(
        "rain",
        {
            currentFloodLevel:{
                type: Sequelize.INTEGER,
                primaryKey : true
            }
        },
        {
            timestamps : true ,
            freezeTableName:true,
            tableName : "rain"
        }
    ))
}