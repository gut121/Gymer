const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

// Define relationships
User.hasMany(Post, { foreignKey: "userId" }); // Corrected foreignKey casing
Post.belongsTo(User, { foreignKey: "userId" }); // Corrected foreignKey casing

User.hasMany(Comment, { foreignKey: "userId" }); // Corrected foreignKey casing
Comment.belongsTo(User, { foreignKey: "userId" }); // Corrected foreignKey casing

Post.hasMany(Comment, { foreignKey: "postId" }); // Corrected foreignKey casing
Comment.belongsTo(Post, { foreignKey: "postId" }); // Corrected foreignKey casing

module.exports = {
  User,
  Post,
  Comment,
};
