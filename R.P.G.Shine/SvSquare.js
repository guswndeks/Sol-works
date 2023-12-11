document.addEventListener("DOMContentLoaded", function() {

    var smithyButton = document.getElementById('SmithyGo');
    var shopButton = document.getElementById('ShopGo');
    var gateButton = document.getElementById('GateGo');
    var messageArea = document.getElementById('messageArea');

    smithyButton.addEventListener('click', function() {  
        messageArea.textContent = "대장간은 지금 갈 수 없다.";
    });

    shopButton.addEventListener('click', function() {   
        messageArea.textContent = "상점은 지금 갈 수 없다.";
    });

    // 이 부분은 링크를 버튼으로 감싸는 형식이 아니라 링크를 그대로 사용하는 방법입니다.
    gateButton.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 링크 동작을 막습니다.
        window.location.href = "Gate.html"; // 링크로 이동합니다.
    });
});