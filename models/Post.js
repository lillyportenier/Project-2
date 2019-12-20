// module.exports = function (sequelize, DataTypes) {
//     var Post = sequelize.define("Post", {
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             len: [1]
//         },
//         body: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//             len: [1]
//         },
//         date: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         }, 
//     });
//     var Location = sequelize.define("Location", {
//         city: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         state: {
//             type: DataTypes.STRING,
//             allowNull: true
//         }
//     });
//     Post.associate = function(models) {
//         Post.hasOne(models.Location)
//     };
//     Post.associate = function (models) {
//         Post.belongsTo(models.User, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };
//     Location.associate = function(models) {
//         Location.belongsTo(models.Post)
//     };
   
//     return Post;
// };
