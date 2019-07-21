require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const api = require('./api');

const app = new Koa();
const router = new Router();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI).then(res => {
    console.log('success');
}).catch(e => {
    console.log(e);
});

const port = process.env.PORT || 4000;

app.use(bodyParser());

router.use('/api', api.routes());

router.get('/', (ctx, next) => {
    ctx.body = '홈';
});

router.get('/about', (ctx, next) => {
    ctx.body = '소개';
});

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params;
    ctx.body = name + '의 소개'
});

router.get('/post', (ctx, next) => {
    const { id } = ctx.request.query;
    if (id) {
        ctx.body = '포스트 #' + id;
    } else {
        ctx.body = '포스트 아이디가 없습니다.';
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
    console.log(port)
});
