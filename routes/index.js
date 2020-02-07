var Router = require('express-promise-router');
var	router = new Router();						// allows asynchronous route handlers

router.get('/', async function(req, res, next) {
	context = {};
	context.css = ['main.css'];
	res.render('homepage', context);
});

router.get('/resume', async function(req, res, next) {
	context = {};
	context.css = ['main.css'];
	res.render('resume', context);
});

router.get('/contact', async function(req, res, next) {
	context = {};
	context.css = ['main.css'];
	res.render('contact', context);
});

router.get('/about', async function(req, res, next) {
	context = {};
	context.css = ['main.css'];
	res.render('about', context);
});

module.exports = router;