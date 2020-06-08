
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    unique: true,
    type: String,
  },
  password:String,
  verified:{
    type:Boolean,
    default:false
  },              //用户验证标识
  accessToken: String, //用户票据，判断用户的合法性
  gender: String, //性别
  nickname:String,//昵称
  age: String, //年龄
  avatar: String, //头像
  height: Number,//身高
  weight:Number,//体重
  meta: {
    creatAt: {
      //创建时间
      type: Date,
      dafault: Date.now(),
    },
    updateAt: {
      //更新时间
      type: Date,
      dafault: Date.now(),
    },
  },
});

UserSchema.pre("save", function (next) {
  //
  if (this.isNew) {
    this.meta.creatAt=this.meta.updateAt = Date.now()
  }
  else{
    this.meta.updateAt = Date.now()
  }

  next();
});

module.exports = mongoose.model("User", UserSchema); //创建schema模板，第一个参数是在
//数据库里建模的时候用户表的名字，第二个参数就是schema
