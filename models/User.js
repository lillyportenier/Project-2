module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    date_created: DataTypes.DATE,
  });

  User.associate = function (models) {
    User.hasMany(models.Post, {
      onDelet: "cascade"
    })
  }
  return User;
};