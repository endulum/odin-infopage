const express = require('express');
const app = express();

app.use(express.static('pages'));

app.all('*', (req, res) => {
	res.status(500).sendFile('404.html', { root: './pages' });
});

app.listen(8080);

