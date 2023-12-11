document.addEventListener("DOMContentLoaded", function() {
    var DeepForestMove = document.getElementById('DeepForestGo');
    var AgainBattle = document.getElementById('Again');
    var GateMove = document.getElementById('GateGo');
    


    DeepForestMove.addEventListener('click', function(event) {  
        event.preventDefault();
        window.location.href = "DeepForest1.html";  
    });
    AgainBattle.addEventListener('click', function(event) {   
        event.preventDefault();
        window.location.href = "SvFront1.html"; 
    });
    GateMove.addEventListener('click', function(event) {    
        event.preventDefault();
        window.location.href = "Gate.html";
    });
});