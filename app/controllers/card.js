const mongoose = require("mongoose");
const Card=mongoose.model('Card')

exports.note= async (ctx,next)=>{
    let isdaka=ctx.request.body.isdaka
    let td_weight=ctx.request.body.td_weight

    card = new Card({
        isdaka: isdaka, 
        td_weight: td_weight, 
    });
    card = await card.save();
    ctx.body={
        success:true
    }
}
exports.look= async (ctx,next)=>{
    let num= await Card.find({isdaka:true}).countDocuments()
    let card1= await Card.findOne({isdaka:true}).sort({creatAt:-1})
    let card2= await Card.findOne({isdaka:true}).sort({creatAt:1})

    ctx.body={
        success:true,
        data:{
            td_weight:card1.td_weight,
            fr_weight:card2.td_weight,
            num:num,
        }
    }
}
