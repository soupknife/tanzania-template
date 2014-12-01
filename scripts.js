$(function() { 
	$(window).scroll(function() { 
		if ($(this).scrollTop() > 10) {
			$('#scrollingheader').addClass('isviviewable');
		}
	};
});