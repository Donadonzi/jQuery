$(document).ready(function(){
	function doValidation(items)
	{
			var empty = 0;
			$.each(items, function(key, item){
					//console.log(key + " : " + $(item));
					if($(item).prop("tagName") == "INPUT" && item.value == "")
					{
							empty++;
					}
			});
			return empty;
	}
	$(".next").click(function(e){
			e.preventDefault();
			var elements = $(this).parent().children();
			var error = doValidation(elements);
			if(error == 0)
			{
					$(".individual").css("display", "none");
					var nextDiv = $(this).parent().next().attr("id");  
					$("#" + nextDiv).fadeIn();
					var num = $(this).data("num");
					$("#bar" + num + ", #icon" + num).addClass("active");
			}
			else
			{
					alert("Fill all the details.");
			}
			
	});
	$(".previous").click(function(e){
			e.preventDefault();
			$(".individual").css("display", "none");
			var prevDiv = $(this).parent().prev().attr("id");
			$("#" + prevDiv).fadeIn();
			var prevNum = $(this).data("num");
			$("#bar" + prevNum + ", #icon" + prevNum).removeClass("active");
	});
	$("input[type=submit]").click(function(){
			var siblings = $(this).parent().children();
			var errors = doValidation(siblings);
			if(errors != 0)
			{
					alert("Fill all the details.");
					return false;
			}
	});
});