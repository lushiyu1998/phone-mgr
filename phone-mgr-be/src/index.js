const koa = require('koa');
const koaBody = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routers');
const { middleware: koaJwtMiddleware, catchTokenError } = require('./helpers/token');
const { logMiddleware } = require('./helpers/log');
const cors = require('@koa/cors');


const app = new koa();

connect().then(() => {
    app.use(cors());
    app.use(koaBody());

    app.use(catchTokenError);

    koaJwtMiddleware(app);

    app.use(logMiddleware);

    registerRoutes(app);
    // 开启http服务
    //接受http请求 并作处理，处理后响应
    app.listen(3000, () => {
        console.log('启动成功');
    });
});

