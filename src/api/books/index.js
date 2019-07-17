const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path;
});

module.exports = router;