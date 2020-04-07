function displayGraph()
		{
			$("tbody tr").each(function(index){
				$(".column").css("height", "0");
				var cell = $(this).children("td").eq(1).text();
				$("#column" + index).animate({height:cell}, 1500).html("<div>" + cell + "</div>")
			});
		}
		$(document).ready(function(){
			var arr = [25, 90, 60, 53];
			var cells = $("tr td");
			for(var i=1, j=0;i<cells.length;i+=3)
			{
				cells[i].innerHTML = arr[j] + "%";
				j++;
			}
			displayGraph();
		});