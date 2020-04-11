$(document).ready(function(){
	$("#treeview .open").click(function(e){
			e.stopPropagation();
			$(this).toggleClass("close open");
	});
});