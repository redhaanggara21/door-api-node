const routes = require('express').Router();

routes.get('/', (req, res) => {
	res.json(
		{
			"nama" : "Rezi",
			"data" : [{
				"created at"  	: "2019-09-08 21:00:00",
				"message"		: "Kapan ?"			 
			},
			{
				"created at"  	: "2019-09-07 21:00:00",
				"message"		: "Kapan ?"			 
			},
			{
				"created at"  	: "2019-09-06 21:10:00",
				"message"		: "Kapan ?"			 
			}]
		}
	);
});

module.exports = routes;