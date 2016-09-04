var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//Login route
app.route('/login')
    .get(function (req, res) {
    res.send('this is the login form');
})
    .post(function (req, res) {
    var result = loginContoller.login(req.body.userName, req.body.password);
    res.send(result);
});
app.listen(3000);