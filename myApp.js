let express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
let app = express();



console.log("Hello World");

app.get("/", handle);

function handle(req, res) {
    res.send("Hello Express");
}






























 module.exports = app;
