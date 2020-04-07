$(document).ready(function(){
	$("a").append("<span class='tooltip'></span>");
	$("a").hover(function(){
			$(this).find("span").fadeIn(2000);
			var capital = $(this).attr("title");
			$(this).find("span").text(capital);
		}, function(){
			$(this).find("span").fadeOut(1000);
	});
});