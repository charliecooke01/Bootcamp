// import all models
const Post = require("./post");
const Category = require("./category");
const User = require("./user");

Post.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Category.hasMany(Post, {
  foreignKey: "categoryId",
  as: "posts",
});

module.exports = {
  Post,
  Category,
  User,
};
