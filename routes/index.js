var Router = require('express-promise-router');
var	router = new Router();						// allows asynchronous route handlers

router.get('/', async function(req, res, next) {
	res.render('homepage');
});

module.exports = router;