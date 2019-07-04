import * as express from "express";
import * as ejs from "ejs";
import * as path from "path";

let app = express();
app.use(express.static(path.resolve('static')));
app.set('views', path.resolve('static', 'views'));  //渲染文件目录
app.engine('html', ejs.__express); //使用html模板，需增加  app.engine('html', require('ejs').__express); 使用EJS模板，不用配置该项。
app.set('view engine', 'html'); //更改省略的后缀为html，而不是.ejs 表示没有指定文件模板格式时，默认使用的引擎插件

app.get("/", (req, res) => {
    res.render('index')
});
app.listen(3666, () => {
    console.log("端口3666");
});