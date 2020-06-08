const mongoose = require("mongoose");
const Health=mongoose.model('Health')

exports.xinxi= async (ctx,next)=>{
    let height=ctx.request.body.height
    let weight=ctx.request.body.weight
    
    health = new Health({
        height: height, 
        weight: weight, 
    });
    health = await health.save();
    ctx.body={
        success:true
    }
}

exports.pinggu= async (ctx,next)=>{
    let health= await Health.findOne().sort({creatAt:-1})
    console.log(health)
    
    ctx.body={
        success:true,
        data:{
            height:health.height,
            weight:health.weight
        }
    }
}
