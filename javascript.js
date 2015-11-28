jQuery(function () {
	$(".list > ul li a").click(function() {
		var index = $(this).index(".list > ul li a");
		var animate = $(".banner-list > ul");
		animate.animate({'margin-left' : (-index * animate.children('li:first').width()) + 'px'  });

		$(".list > ul li a").removeClass('selected');
		$(this).addClass('selected');
	});
});

function left() {
		var div = $(".categories > ul");
		var firstChild = div.children('li:first');
		var margin = div.css('margin-left') ? parseInt(div.css('margin-left').replace('px', '')) : 0;

		if (margin < 0) {
			margin += firstChild.width();
			div.animate({'margin-left' : margin + 'px'});
		}
	}
	function right() {
		var div = $(".categories > ul");
		var lastChild = div.children('li:last');
		var margin = div.css('margin-left') ? parseInt(div.css('margin-left').replace('px', '')) : 0;

		if (div.parent().width() < (lastChild.position().left + lastChild.width() + margin)) {
			margin -= lastChild.width();
			div.animate({'margin-left' : margin + 'px'});
		}
	}