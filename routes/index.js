var Router = require('express-promise-router');
var	router = new Router();						// allows asynchronous route handlers

router.get('/', async function(req, res, next) {
	context = {};
	context.css = ['main.css'];
	res.render('homepage', context);
});

module.exports = router;