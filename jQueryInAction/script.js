
   var images, thumbWidth;
   var count = 0;
	var imagesArray = ["images/sce1.jpeg",
					   "images/sce2.jpeg",
					   "images/sce3.jpeg",
					   "images/sce5.jpeg",
					   "images/sce6.jpeg",
					   "images/sce7.jpeg",
					   "images/sce8.jpeg",
					   ];
	
	$(document).ready(function(){
		$.each(imagesArray, function(index, value){
			$("#upper").append("<img data-id='img" + index + "' src='" + value + "' />");
			$("#thumbs").append("<a href='#' class='thumb' data-id='img" + index + "'> <img src='" + value + "' /></a>");
		});
		
		//$("#upper").append($("img[data-id=img0]"));
		images = $("#upper").find("img");
		thumbWidth = $(".thumb").css("width");
		thumbWidth = thumbWidth.slice(0, (thumbWidth.length - 2));
		
		updateArrows();
		
		$(".thumb").on("click", function(){
			var thumbId = $(this).attr("data-id");
			//$("img[data-id=" + thumbId + "]").insertAfter( $("#upper img:last"));

			$.each(images, function(index, value){
			   if (thumbId == $(value).attr("data-id")) {
				  $(value).css("z-index", "1")
			   }
			   else
			   {
				  $(value).css("z-index", "-1")
			   }
			});
		 });
		
	  $(".arrow").on("click", function(){
		 var arrowId = $(this).attr("id");		 
		 var scrollString;
		 
		 if (arrowId == "left")
		 {
			scrollString = "+=";
			count--;
		 }
		 else
		 {
			scrollString = "-=";
			count++;
		 }
		 
		 $("#thumbs").animate({
			marginLeft: scrollString + thumbWidth + "px"}, "fast", updateArrows);
		 alert(marginLeft);		 
	  });	  
   });
	
	function updateArrows()
	{
	  var totalNoImages = images.length;
	  var galleryWidth = $("#gallery").css("width");
	  galleryWidth = galleryWidth.slice(0, (galleryWidth.length - 2));
	  noThumbsAtATime = galleryWidth/thumbWidth;
	  var lastCount = totalNoImages - noThumbsAtATime;
	  
	  if (count == lastCount)
	  {
		$("#right").addClass("disabled");
	  }
	  else
	  {
		 $("#right").removeClass("disabled");
	  }
	  
	  if (count == 0)
	  {
		 $("#left").addClass("disabled");
	  }	  
	  else
	  {
		 $("#left").removeClass("disabled");
	  }
	}
