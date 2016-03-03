(function (console) { "use strict";
var Moment = require("moment");
var Main = function() { };
Main.main = function() {
	console.log("now");
	console.log(Moment().format());
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
