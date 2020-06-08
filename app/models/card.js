
const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  isdaka: Boolean,//身高
  td_weight:String,//体重
  creatAt: {
      //创建时间
      type: Date,
      dafault: Date.now(),
    },
});

CardSchema.pre("save", function (next) {

  if (this.isNew) {
    this.creatAt = Date.now()
  }

  next();
});

module.exports = mongoose.model("Card", CardSchema); 