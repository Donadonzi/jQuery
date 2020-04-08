$(document).ready(function(){
	$("body").prepend("<div id='container'><progress id='indicator' value='0' max='100'></progress></div>")
	$(window).scroll(function(){
			var windowHeight = $(window).height();
			var documentHeight = $(document).height();
			var position = $(window).scrollTop();
			console.log(windowHeight + " : " + documentHeight + " : " + position);
			var progress = (position/(documentHeight-windowHeight))*100;
			console.log("Progress: " + progress); 
			$("#indicator").attr("value", progress);
			
	});            
});