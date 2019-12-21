



var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
  //   userId: {
  //     type: DataTypes.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true
  // },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUsername: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  // User.associate = function(models){
  //   User.hasMany(models.Post, {as: "posts"})
  // };

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  }
  );
  // return User.create({
  //   username: "UFO-GOD",
  //   password: "iloveufos",

  //   Post: {
  //     title: "Circle Lights",
  //     body: "Bright shifting lights seen over Buckley Air Force Base",
  //     date: "12/16/19",
  //     Location: [{
  //       city: "Centennial",
  //       state: "CO",
  //     }]
  //   }
  // },{
  //   include: [{
  //     association: User.Post,
  //     include: [Post.Location]
  //     }]
  //   });
  return User;
  // return Post;
  // return Location;

}




