const Router = require('koa-router');
const booksCtrl = require('./books.controller');

const router = new Router();

router.get('/', booksCtrl.list);
router.post('/', booksCtrl.create);
router.delete('/:id', booksCtrl.delete);
router.put('/:id', booksCtrl.replace);
router.patch('/:id', booksCtrl.update);
router.get('/:id', booksCtrl.get);

module.exports = router;