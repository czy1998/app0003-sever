const mongoose = require("mongoose");
const User=mongoose.model('User')
const Food=mongoose.model('Food')
const uuid = require("uuid");

exports.signup= async (ctx,next)=>{
    
    let food= await Food.find({})
    ctx.body=food
}
exports.test= async (ctx,next)=>{
    let username=ctx.request.body.username//可以写成 let {username,password}=ctx.request.body 解构模式
    let password=ctx.request.body.password
    
    if(!username||!password){
        ctx.body={
            success: false ,
            err:'注册失败'
        }
        return next
    }

    let user= await User.findOne({
        username:username
    })
    if (!user) {
        let accessToken =uuid.v4()
        user = new User({
            nickname:'健身一号',
            avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590169413633&di=b920bda63585983dca5e6e6a043a9495&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180803%2F20%2F1533299403-FdrPbEfzkM.jpg',
            username: username, 
            password: password, 
            accessToken:accessToken,
            age:16
        });
        user = await user.save();     
        ctx.body={success:true}
        
      }else{
          ctx.body={success:false}
      }

}

exports.denglu= async (ctx,next)=>{
    let username=ctx.request.body.username
    let password=ctx.request.body.password

    if(!username||!password){
        ctx.body={
            success: false ,
            err:'登陆失败'
        }
        return next
    }
    
    let user= await User.findOne({
        username:username,
        password:password
    })
    if (user) {
        user.verified=true;
        user = await user.save();
        ctx.body = {
            success: true,
            data:{
                nickname:user.nickname,
                accessToken:user.accessToken,
                avatar:user.avatar,
                _id:user._id,
                age:user.age
            }
        }
    } else {
        ctx.body = {
        success: false,
        err:'登陆失败'
        }
    }
    
}

exports.update= async (ctx,next)=>{
    let body=ctx.request.body
    let accessToken=body.accessToken

    if(!accessToken){
        ctx.body={
            success:false,
            err:'用户不见了'
        }
        return next
    }

    let user= await User.findOne({
        accessToken:accessToken,
    }) 

    if(!user){
        ctx.body={
            success:false,
            err:'用户不见了'
        }
        return next
    }
    let fields='nickname,age,avatar,gender'.split(',')
    for(let field of fields){
        if(body[field]){
            user[field]=body[field]
        }
    }
    user = await user.save();

    ctx.body={
        success:true,
        data:{
            nickname:user.nickname,
            accessToken:user.accessToken,
            age:user.age,
            avatar:user.avatar,
            gender:user.gender,
            _id:user._id
        }
    }
}