document.addEventListener("DOMContentLoaded", function() {

    var DeepForest1BattleMove = document.getElementById('DeepForest1BattleGo');

    DeepForest1BattleMove.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = "Battle.html";
    });
});