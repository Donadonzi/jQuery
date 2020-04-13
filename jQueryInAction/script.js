var imgArr = [
	"images/flower2.jpg",
	"images/flower3.jpg",
	"images/flower5.jpg",
	"images/flower6.jpg",
	"images/flower7.jpg"
 ];
$(document).ready(function(){
$.each(imgArr, function(index, value){
$("#thumbs").append("<a rel='mygallery' class='fancy' href='" + value + "'><img src='" + value + "' /></a>");
$(".fancy").fancybox({
	padding:0,
	helpers:{overlay:{css:{'background':'pink'}}}
 });
});
});		