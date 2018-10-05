var express = require('express')
var app = express()
var request = require('request');
var cheerio = require('cheerio')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
	request('https://www.jikexueyuan.com/', function (error, response, body) {
	  if(!error && response.statusCode == 200); {// Print the response status code if a response was received
		  $ = cheerio.load(body);
		  res.json({ 
		  	classnum: $('.aside-cList li').length
			})
		}
	});
})
app.listen(3000);
 