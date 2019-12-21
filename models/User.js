var bcrypt = require("bcryptjs");

// module.exports = function (sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     user_name: DataTypes.STRING,
//     user_email: DataTypes.STRING,
//     date_created: DataTypes.DATE,
//   });




module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      // validate: {
      //   isUsername: true
      // }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // module.exports = function(connection, Sequelize){
  //   var table = connection.define('table', {
  //     id : Sequelize.INTEGER,
  //   });
  //   return table;
  // }
  // var Post = sequelize.define("Post", {
  //   title: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     len: [1]
  //   },
  //   body: {
  //     type: DataTypes.TEXT,
  //     allowNull: false,
  //     len: [1]
  //   },
  //   date: {
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //   },
  // });
  // var Location = sequelize.define("Location", {
  //   city: {
  //     type: DataTypes.STRING,
  //     allowNull: true
  //   },
  //   state: {
  //     type: DataTypes.STRING,
  //     allowNull: true
  //   }
  // });

  // User.associate = function (models) {
  //   User.hasMany(models.Post, {
  //     onDelet: "cascade"
  //   })
  // };


  // Post.associate = function (models) {
  //   Post.hasOne(models.Location)
  // };
  // Post.associate = function (models) {
  //   Post.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  // Location.associate = function (models) {
  //   Location.belongsTo(models.Post)
  // };


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
  // }, {
  //     include: [{
  //       association: User.Post,
  //       include: [Post.Location]
  //     }]
  //   });
 User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  }
  );
  return User;
}



