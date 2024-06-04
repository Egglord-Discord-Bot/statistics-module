// dependecies
const express = require('express'),
	app = express();

module.exports = async (bot) => {
	app
		.engine('html', require('ejs').renderFile)
		.set('view engine', 'ejs')
		.set('views', './src/website/views')
		.use(express.static('./src/website/public'))
		.use('/', require('./routes')(bot))
		.use('/api', await require('./routes/api')(bot));

	app.listen(3500, () => {
		console.log('Example app listening on port 3500');
	});
};
