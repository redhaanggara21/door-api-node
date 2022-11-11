var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
	var nama = req.nama;
	var data = [
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
		},
		{
			"nama" : "Faris",
			"data" : [{
				"created at"  	: "2019-12-18 21:00:00",
				"message"		: "Kapan ?"			 
			},
			{
				"created at"  	: "2019-12-08 22:00:00",
				"message"		: "Kapan ?"			 
			},
			{
				"created at"  	: "2019-12-01 21:50:00",
				"message"		: "Kapan ?"			 
			}]
		}
	];
	const getData = data.find(fruit => data.name === nama);
	if (getData) {
		res.json(getData);
	}
	else
		res.json(data);
 
});

router.post("/", (req, res) => {
	res.json(req.body);
});

module.exports = router;
