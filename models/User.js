

var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  
  var User = sequelize.define("User", {
  //   userId: {
  //     type: DataTypes.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true
  // },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   isUsername: true
      // }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
  

  User.associate = function(models){
    User.hasMany(models.Post, { as: "Post_fk" })
  };

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  }
  
  );

  
  return User;


}




