const koa = require("koa");
const logger = require("koa-logger");
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");

const fs = require("fs"); //通过fs文件系统，来读取所有模型的检索文件，一个一个进行加载
const path = require("path");
const mongoose = require("mongoose");
const db = "mongodb://localhost/app01";

mongoose.Promise = require("bluebird");
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

require('./app/models/user')
require('./app/models/food')
require('./app/models/eat')
require('./app/models/health')
require('./app/models/card')
require('./app/models/foodlist')

/* const models_path = path.join(__dirname, "/app/models");

let walk = function (modelPath) {
  fs.readdirSync(modelPath) //同步读出该路径下的所有的文件
    .forEach(function (file) {
      //对文件进行遍历
      let filePath = path.join(modelPath, "/" + file); //通过在当前路径后加'/'和文件名，得到该文件路径
      let stat = fs.statSync(filePath); //同步的拿到状态

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          //通过正则表达式，如果文件后缀是js或者coffee，就加载模型文件
          require(filePath);
        }
      } else if (stat.isDirectory()) {
        //不是文件，那就是嵌套的目录，文件夹，需要深度遍历
        walk(filePath);
      }
    });
};

walk(models_path);  */


const router =require('./config/routes')()

const app = new koa();

app.keys = ["czy"];
app.use(logger());
app.use(session(app));
app.use(bodyParser());


app.use(router.routes()).use(router.allowedMethods()) 

app.listen(1234,()=>{
  console.log('demo is starting! http://localhost:1234/u/signup')
})