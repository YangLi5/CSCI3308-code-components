var https = require('https');

https.createServer(function (req, res){
	res.write('ello woirld');
	res.end();
}).listen(8080);

console.log('working');