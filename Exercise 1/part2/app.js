var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

// View Engine EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));


app.get("/", function(req, res){
	res.render("index");
});

app.post("/taxCalculator", function(req, res){
	var amount = req.body.amount;
	var tax_pct = req.body.tax_pct;
	var currency = req.body.currency;
	var result = ((tax_pct/100)*amount);
	console.log(result);
	result = Number(result) + Number(amount);
	var total_amount = "The toal amount is " + result + " " + currency;
	res.render("index", {
		result: total_amount
	});
});

app.listen(3000, function(){
	console.log("Server is listening at: 3000");
});