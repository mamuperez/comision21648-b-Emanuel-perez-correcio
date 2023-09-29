const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");


const PostModel = sequelize.define("posts", {
  title: {
    type: DataTypes.STRING, allowNull: false
  },
  content: {
    type: DataTypes.TEXT, allowNull: false
  },
  imageUrl: {
    type: DataTypes.TEXT,allowNull: false
  }
});

module.exports = { PostModel };
