const mongoose = require("mongoose");
const Food=mongoose.model('Food')
const Foodlist=mongoose.model('Foodlist')
const Eat=mongoose.model('Eat')

exports.list= async (ctx,next)=>{
    let list= await Food.find({})
    ctx.body={
        success:true,
        data:list,
    }
}
exports.foodlist= async (ctx,next)=>{
    let list= await Foodlist.find({})
    ctx.body={
        success:true,
        data:list,
    }
}
exports.jilu= async (ctx,next)=>{
    let name=ctx.request.body.name
    
    eat = new Eat({
        name: name, 
    });
    eat = await eat.save();
    ctx.body={
        success:true
    }
}
exports.see= async (ctx,next)=>{
    let see= await Eat.find({})

    ctx.body={
        success:true,
        data:see,
    }
}
exports.deleteOne= async (ctx,next)=>{
    let list= await Eat.deleteOne({})
    console.log(list)
    ctx.body={
        success:true,
    }
}
exports.delete= async (ctx,next)=>{
    let list= await Eat.deleteMany({})
    console.log(list)
    ctx.body={
        success:true,
    }
}