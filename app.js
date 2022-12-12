const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('Hello amare')
})
app.listen(9000, function(req, res) {
    console.log("the server is running")
});