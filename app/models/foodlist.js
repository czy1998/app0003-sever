const mongoose = require("mongoose");

const FoodlistSchema = new mongoose.Schema({
  name: String,//食物名称
  img:String,//缩略图
});


module.exports = mongoose.model("Foodlist", FoodlistSchema);
