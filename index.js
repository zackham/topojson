var fs = require("fs");

var topojson = module.exports = new Function("topojson", "return " + fs.readFileSync(__dirname + "/topojson.js", "utf8"))();
topojson.topology = require("./lib/topojson/topology");
topojson.simplify = require("./lib/topojson/simplify");
topojson.filter = require("./lib/topojson/filter");
