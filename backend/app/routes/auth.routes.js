const verifySignUp = require('../middleware/verifySignUp');
const controller = require('../controllers/auth.controller');
const express = require('express');

const app = express();

// allow cross origin resource sharing
app.use(function (req, res, next) {
	res.header(
		'Access-Control-Allow-Headers',
		'x-access-token, Origin, Content-Type, Accept'
	);
	next();
});

app.post('/signup', [verifySignUp.checkDuplicateData], controller.signup);

app.post('/signin', controller.signin);

module.exports = app;
