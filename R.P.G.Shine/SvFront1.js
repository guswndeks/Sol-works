document.addEventListener("DOMContentLoaded", function() {

    var battleMove = document.getElementById('battleGo');
    battleMove.addEventListener('click', function(event) {    
        event.preventDefault();
        var MapNumber = Number(1);
        window.location.href = "battle.html?MapNumber=" + MapNumber;
        
        

    });

});

