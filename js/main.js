$( document ).ready(function() {
	$('.expend').click(function(){
		$(this).toggleClass('open');
		$(this).find('.expend-body').toggleClass('open');
	});
	$(".text-max-height-mobile").click(function(){
		$(this).find('p').toggleClass('open');
	});
	$('a[href="#filters"]').click(function(){
		$("#filters").fadeIn();
	})
	$('.close-filter').click(function(){
		$("#filters").fadeOut();
	})

	$("#grid").change(function(){
		$('.listing-ehpad').toggleClass('listing-grid').toggleClass('listing-list');
		$('.etablissement').toggleClass('col-md-6').toggleClass('col-12').find('.btn').toggleClass('w-100');
	})
});