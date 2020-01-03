
module.exports = function (sequelize, DataTypes) {

    var Post = sequelize.define("Post", {
        postId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        title: {
          type: DataTypes.STRING,
          allowNull: false,
          len: [1]
        },
        body: {
          type: DataTypes.TEXT,
          allowNull: false,
          len: [1]
        },
        date: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      });

    Post.associate = function (models) {
        Post.belongsTo(models.User, {foreignKey:"userId", as: "user"});
    };
    return Post;
};
