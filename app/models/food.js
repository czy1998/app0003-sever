const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: String,//食物名称
  nutrition:String,//食物营养价值
  cook_method:String,//制作方法
  cook_list:String,//所需食材
  img:String,//缩略图
});


module.exports = mongoose.model("Food", FoodSchema);
