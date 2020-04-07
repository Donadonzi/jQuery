var finished;
    $(document).ready(function(){
        finished = false;
       for(var i=1;i<=9;i++) 
        {
            $("#grid").append("<div id=s" + i + " class=square data-position=" + i + "></div>");
        }
        $(".square").on("click", yourTurn);
    }); 
    
    function yourTurn()
    {
        if(!finished)
        {
             if($(this).attr("class").indexOf("marked") < 0)
            {
                $(this).addClass("x-mark");
                $(this).addClass("marked");
                finished = findWinner($(this).data("position"), "x-mark");
                computerTurn();
            }
            else
                alert("This square is already marked!");     
        }
        else if(finished)
            alert("The game is over!");
        if($(".marked").length == 9 && !finished)
        {
            displayResult("Draw", "draw");   
        }             
    }
    
    function computerTurn()
    {
        var unticked = $(".square:not(.marked)");
        var position = Math.floor(Math.random()*unticked.length);
        var randomElement = unticked[position];
        $(randomElement).addClass("o-mark");
        $(randomElement).addClass("marked");
        finished = findWinner($(randomElement).data("position"), "o-mark");
    }
    
    function findWinner(pos, mark)
    {
        var winningPositions = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[3,5,7],[4,5,6],[7,8,9]];
        if($(".x-mark").length >= 3 || $(".o-mark").length >= 3)
        {
           $.each(winningPositions, function(index, withinArray){
                if(withinArray.indexOf(pos) >= 0)
                {
                    var cellsInARow = 0;
                    $.each(withinArray, function(key, value){
                        var currentMark = $("#s"+value).attr("class");
                        if(currentMark.indexOf(mark)>=0)
                        {
                            console.log(pos + " : " + withinArray);
                            cellsInARow = cellsInARow + 1;
                            console.log("In a Row: " + cellsInARow);
                            if(cellsInARow == 3)
                            {            
                                finished = true;
                               if(mark == "x-mark")
                                {
                                    result = "You Win!";
                                    status = "win";
                                }
                                else{
                                   result = "You Lost!";
                                    status = "lost"; 
                                }
                                displayResult(result, status);
                            }
                        }
                    })
                }
           })     
        }
       return finished; 
    }
    
    function displayResult(result, status)
    {
       $("#container").show();
        $("#result").html(result);
        $("#result").addClass(status);
    }
    function resetGame()
    {
        $("#container").hide();
        $(".square").removeClass("marked");
        $(".square").removeClass("x-mark");
        $(".square").removeClass("o-mark");
        $("#result").removeClass();
        finished = false;
    }