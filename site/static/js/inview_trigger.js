$(function() {
	
    $('.inviewSymbolIcon').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('SymbolIcon');
		} 
	});
    
    $('.inviewfadeInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('fadeInUp');
		} 
	});
    
    $('.inviewfadeInDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('fadeInDown');
		} 
	});
    
    $('.inviewfadeInLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('fadeInLeft');
		} 
	});
    
    $('.inviewfadeInRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('fadeInRight');
		} 
	});
    
	$('.inviewTitleRoll').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('TitleRoll');
		} 
	});

});