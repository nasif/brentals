//Declare requested modules
var express = require('express'); // express
var cors = require('cors');  // Enabling cross origin with express
var path = require('path'); // path utility
var consolidate = require('consolidate'); // for ejs template engine
var bodyParser = require('body-parser'); // request body parser
var app = express();
var conf = require("./conf/conf.js");
var json2xls = require('json2xls');
var fs = require('fs');
var mongo = require('mongodb');

//setting ejs as rendering engine and views as directory of html pages
app.engine('html', consolidate.ejs);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//path to serve files for client
app.use(express.static(path.join(__dirname, 'public')));

//Capability to convert json to xls
app.use(json2xls.middleware);

/*
app.get('/', function (req, res) {
  res.send('Hello World!ssssss')
})
*/

//App will be listening on this port
app.listen(conf.web.port);
