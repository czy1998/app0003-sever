const Router =require('koa-router')
const User=require('../app/controllers/user')
const Health=require('../app/controllers/health')
const Card=require('../app/controllers/card')
const Food=require('../app/controllers/food')


module.exports=function(){
    let router=new Router({
        //prefix:'/api/1'
    })
    //user
    router.get('/u/signup',User.signup)
    router.post('/u/test',User.test)//注册
    router.post('/u/denglu',User.denglu)//登陆
    router.post('/u/update',User.update)//更新个人信息
    //档案
    router.post('/u/xinxi',Health.xinxi)//基本信息
    router.get('/u/pinggu',Health.pinggu)//健康评估
    //打卡
    router.post('/u/note',Card.note)//打卡记录
    router.get('/u/look',Card.look)//查看信息
    //食物
    router.get('/u/list',Food.list)//查看饮食清单
    router.get('/u/foodlist',Food.foodlist)//查看食品清单
    router.post('/u/jilu',Food.jilu)//记录饮食
    router.get('/u/see',Food.see)//查看记录
    router.get('/u/deleteOne',Food.deleteOne)//删除一条记录
    router.get('/u/delete',Food.delete)//删除所有记录

    return router
}