const mongoose = require("mongoose");

const EatSchema = new mongoose.Schema({
  name: String,//食物名称
  creatAt: {
    //创建时间
    type: Date,
    dafault: Date.now(),
  },
});

EatSchema.pre("save", function (next) {

  if (this.isNew) {
    this.creatAt = Date.now()
  }

  next();
});

module.exports = mongoose.model("Eat", EatSchema);
