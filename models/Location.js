
module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
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
        Location.belongsTo(models.Post, { foreignKey: "postId" })
    };
    return Location;
};