(function ($) {
	$.fn.appleEffect = function(options) {
		var color = (options != undefined && options.color != undefined) ? options.color : '#FFF';
		var zIndex = (options != undefined && options.zIndex != undefined) ? options.zIndex : 9999;
		var timeout = (options != undefined && options.timeout != undefined) ? options.timeout : 1000;
		var speed = (options != undefined && options.speed != undefined) ? options.speed : 1000;
		var tw = $(this).width(), th = $(this).height(), tpos = $(this).position(), tl = tpos.left, tt = tpos.top, dw = $(document).width(), dh = $(document).height();
		$('body').append('<div class="appleEffectOverlay" style="z-index:'+zIndex+';background:'+color+';position:absolute;top:0;left:0;width:'+dw+'px;height:'+tt+'px;"></div>');
		$('body').append('<div class="appleEffectOverlay" style="z-index:'+zIndex+';background:'+color+';position:absolute;top:'+tt+'px;left:0;width:'+tl+'px;height:'+th+'px;"></div>');
		$('body').append('<div class="appleEffectOverlay" style="z-index:'+zIndex+';background:'+color+';position:absolute;top:'+tt+'px;left:'+(tl+tw)+'px;width:'+(dw-(tl+tw))+'px;height:'+th+'px;"></div>');
		$('body').append('<div class="appleEffectOverlay" style="z-index:'+zIndex+';background:'+color+';position:absolute;top:'+(tt+th)+'px;left:0;width:'+dw+'px;height:'+(dh-(tt+th))+'px;"></div>');
		var cb = false;
		setTimeout(function() {
			$('.appleEffectOverlay').fadeOut(speed, function() {
				$(this).remove();
				if (options != undefined && options.callback != undefined && !cb) {
					options.callback();
					cb = true;
				}
			});
		}, timeout);
	};
})(jQuery);