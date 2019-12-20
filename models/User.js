module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Post, {
      onDelet: "cascade"
    })
  }
  return User;
};
