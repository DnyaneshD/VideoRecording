var express = require("express");
var app = express();
// application -------------------------------------------------------------
app.get('*', function (req, res) {
    res.sendfile('./record1.html');
});
app.listen(8787);