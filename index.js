const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
	const q = url.parse(req.url, true);
	const filename = "./pages" + q.pathname;
	// console.log(filename);
	fs.readFile(filename, (err, data) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			const errorPage = fs.readFileSync('./pages/404.html', 'utf8');
			res.write(errorPage);
			return res.end();
		}
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		return res.end();
	});
}).listen(8080);
