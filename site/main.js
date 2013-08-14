$(document).ready(function() {
	$('#nav a').click(function() {
		var href = $(this).attr('href');
		$.scrollTo($(href), 250);
		return false;
	});
	$('#top').click(function() {
		$.scrollTo($('body'), 250);
		return false;
	})
});