const Router = require('koa-router');
const booksCtrl = require('./books.controller');

const router = new Router();

router.get('/', booksCtrl.list);
router.post('/', booksCtrl.create);
router.delete('/', booksCtrl.delete);
router.put('/', booksCtrl.replace);
router.patch('/', booksCtrl.update);

module.exports = router;