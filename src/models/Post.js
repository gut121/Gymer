const { DataTypes } = require("sequelize");
const sequelize = require("../configs/DB");

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {  // Keep this as the single reference to the user
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
    timestamps: true,
    tableName: "posts",
});

module.exports = Post;
