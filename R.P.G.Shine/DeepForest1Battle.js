document.addEventListener("DOMContentLoaded", function() {

    var DeepForest2Move = document.getElementById('DeepForest2Go');
    var AgainBattle = document.getElementById('Again');
    var SvFrontMove = document.getElementById('SvFrontGo');
    var messageArea = document.getElementById('messageArea');

    DeepForest2Move.addEventListener('click', function(){
        messageArea.textContent = "더 깊은 숲 속으로는 지금 갈 수 없다.";
    });
    AgainBattle.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = "DeepForest1.html";
    });
    SvFrontMove.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = "SvFront1.html";
    });
});