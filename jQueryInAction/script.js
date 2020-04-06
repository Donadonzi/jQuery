var interval;
    function startTicker()
    {
        $("#news li:first").slideUp(function(){
            $(this).appendTo($("#news")).slideDown();
        });
    }
    
    function stopTicker()
    {
        clearInterval(interval);
    }
    
    $(document).ready(function(){
        startTicker();
        interval = setInterval(startTicker, 3000);
        $("#news").hover(function(){
                stopTicker();
             }, function(){
                    startTicker();
                    interval = setInterval(startTicker, 3000);
        });
    });