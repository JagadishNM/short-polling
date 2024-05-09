const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5111;

let data = 'Initial data';

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

// get data
app.get('/getData', (req, res) => {
	res.send({ data });
});

// update data
app.get('/updateData', (req, res) => {
	data = 'Update data';
	res.send({ data });
});

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
