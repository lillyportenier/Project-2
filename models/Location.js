
module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        loactionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Location.associate = function (models) {
        Location.belongsTo(models.Post, { foreignKey: "postId"})
    };
    return Location;
};