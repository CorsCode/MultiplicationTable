function create_table(table_length) {
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

	return table;
}

function begin_learning() {
	//alert("Begin learning!");
	$("html, body").animate({
		scrollTop: $("#begin").offset().top
	}, 1000);
}

(function($) {
	var table = $("#table"),
		begin_button = $("#intro button");
	
	//table.html(create_table(12));

	begin_button.click(function() {
		begin_learning();
	});
})(jQuery);
