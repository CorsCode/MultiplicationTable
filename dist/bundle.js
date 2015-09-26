(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	var table_length = 12;

	var table = "";

	var x, y;
	// ROW
	for(x = 1;x <= table_length;x++) {
		var row = "<div class='row'>";

		// COL
		for(y = 1;y <= table_length;y++) {
			row += "<div class='blue lighten-3 col s12 m1 l1'>" + (x * y) + "</div>";
		}

		row += "</div>";

		table += row;
	}

	document.getElementById("table").innerHTML = table;
})();

},{}]},{},[1]);
