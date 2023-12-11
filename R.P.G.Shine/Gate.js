document.addEventListener("DOMContentLoaded", function() {
    var SvFrontMove = document.getElementById('SvFrontGo');
    var SvSquareMove = document.getElementById('SvSquareGo');

    SvFrontMove.addEventListener('click', function(event) {    
        event.preventDefault();
        window.location.href = "SvFront1.html";
    });
    SvSquareMove.addEventListener('click', function(event) {    
        event.preventDefault();
        window.location.href = "SvSquare.html";
    });
});