
const mongoose = require("mongoose");

const HealthSchema = new mongoose.Schema({
  height: Number,//身高
  weight:Number,//体重
  creatAt: {
      //创建时间
      type: Date,
      dafault: Date.now(),
    },
});

HealthSchema.pre("save", function (next) {

  if (this.isNew) {
    this.creatAt = Date.now()
  }

  next();
});

module.exports = mongoose.model("Health", HealthSchema); 