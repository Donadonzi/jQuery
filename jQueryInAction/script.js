$(document).ready(function(){
	$("#filter a").click(function(){
			$("#filter .current").removeClass("current");
			$(this).parent().addClass("current");
			var filterValue = $(this).text().toLowerCase().replace(" ", "_");
$("#portfolio li").fadeIn(10);
if (filterValue != "all")
{
$("#portfolio li").not("." + filterValue).fadeOut(10);	
}					
	});
});

