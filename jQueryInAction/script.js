$(document).ready(function(){
	$("li").mouseover(function(){
			var current = $(this);
			$("li").each(function(index){
					$(this).addClass("hovered-stars");
					if(index == current.index())
					{
							return false;
					}
			});
	});
	$("li").mouseleave(function(){
			$("li").removeClass("hovered-stars");
	});
	$("li").click(function(){
			$("li").removeClass("clicked-stars");
			$(".hovered-stars").addClass("clicked-stars");
			$("#message").html("Thanks! You have rated this " + $(".clicked-stars").length + " star(s).")
	});
});