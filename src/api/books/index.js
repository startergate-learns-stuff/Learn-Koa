const Router = require('koa-router');
const booksCtrl = require('./books.controller');

const router = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`
};

router.get('/', booksCtrl.list);
router.post('/', booksCtrl.create);
router.delete('/', booksCtrl.delete);
router.put('/', booksCtrl.replace);
router.patch('/', booksCtrl.update);

module.exports = router;