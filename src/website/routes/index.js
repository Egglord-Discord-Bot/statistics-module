const { Router } = require('express'),
	axios = require('axios'),
	{ domain } = require('../../config.js'),
	router = Router();

module.exports = () => {

	router.get('/', async (req, res) => {
		// render page
		const { data } = await axios.get(`${domain}api`);

		res.render('index', data);
	});

	return router;
};
