
module.exports = function (sequelize, DataTypes) {

  var Post = sequelize.define("Post", {
      // postId: {
      //     type: DataTypes.INTEGER,
      //     autoIncrement: true,
      //     primaryKey: true
      // },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
      // date: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
    });

  Post.associate = function (models) {
      Post.belongsTo(models.User);
  };
  Post.associate = function (models) {
      Post.hasOne(models.Location);
  };
  return Post;
};