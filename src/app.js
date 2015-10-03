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
		scrollTop: $("#before_begin").offset().top
	}, 1000);
}
function begin_table(table) {
	table.children('.inner').children('.container').html(create_table(12));

	$("html, body").animate({
		scrollTop: table.offset().top
	}, 1000);
}
function begin_basic() {
	// TODO: add basic lessons to get user up to speed with multiplication table
}

(function($) {
	var intro = $('#intro'),
		introOffset = intro.offset().top,
		before_begin = $('#before_begin'),
		before_beginOffset = before_begin.offset().top,
		table = $("#table");

	// BUTTONS
	var begin_button = $("#intro button"),
		yes_button = $("#before_begin button[name='yes_i_do']"),
		no_button = $("#before_begin button[name='no_i_do_not']");

	$(document).on("scroll", function() {
		if($(document).scrollTop() > introOffset && !intro.hasClass("hidden")) {
			intro.addClass("hidden");
			before_begin.removeClass("hidden");
		}

		if($(document).scrollTop() > before_beginOffset && !before_begin.hasClass("hidden")) {
			before_begin.addClass("hidden");
			table.removeClass("hidden");
		}
	});

	begin_button.click(function() {
		begin_learning();
	});

	yes_button.click(function() {
		// If user does understand basic multiplication
		begin_table(table);
	});

	no_button.click(function() {
		// If user does NOT understand basic multiplication
		begin_basic();
	});
})(jQuery);
