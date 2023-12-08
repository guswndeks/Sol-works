var cpb;
var cp;

var isPopupOpened = false;	

window.onload = function(){


    cpb = document.getElementById("cpb");
    cp = document.getElementById("cp");

    // html 에
    // <input type="button" id="btn" value="고양이" onclick="popup();"></input>
    // 이런식으로 했던것과 동일한 처리임.

    cpb.addEventListener("click",popup);
}


function popup(){
    
    if(isPopupOpened == false){
        cp.style.display = "inline";
        isPopupOpened = true;
    } else {
        cp.style.display = "none";
        isPopupOpened = false;
    }
    // if(isPopupOpened == false){
    //     imgCat.style.display = "inline";
    //     isPopupOpened = true;
    // } else {
    //     imgCat.style.display = "none";
    //     isPopupOpened = false;
    // }
}




function closePopup() {

    //팝업창 ( <div id="popup"> ) 을 찾고
    var popupWindow = document.getElementById("popup");
    var popupTxt = document.getElementById("popup_txt");
    var popupBtnClose = document.getElementById("popup_btn_close");

    //찾은 팝업 창을 닫기(라고 쓰고 안보이게 처리라고 읽는다.)
    // popupWindow.style.display = "none";

    popupWindow.style.color = "blue";
    // popupTxt.style.color = 'rgba(0,0,0,0)';
    popupTxt.style.color = '#00000000';

    // popupWindow.style.height = "600px";
    popupWindow.style.height = "0px";

    // popupWindow.style.width = "600px";
    popupWindow.style.width = "0px";

    popupWindow.style.background = "gray";

    popupWindow.style.transitionProperty = "width, height, background";
    popupWindow.style.transitionDuration = "3s";

    popupTxt.style.transitionProperty = "color";
    popupTxt.style.transitionDuration = "3s";


}

function cl(){
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    // popup.style.background = "pink";
    // popup.style.width = "opx";
    // popup.style.height = "0px";
    popup.style.transitionProperty = "background, width, height";
    popup.style.transitionDuration = "1s";
}
function op(){
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.style.background = "aqua";
    popup.style.width = "200px";
    popup.style.height = "200px";
    popup.style.transitionProperty = "background, width, height";
    popup.style.transitionDuration = "1s";
}

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 시간, 분, 초를 두 자리 수로 표시하기 위해 10 미만인 경우 앞에 0을 붙입니다.
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 현재 시간을 시:분:초 형식으로 만듭니다.
    var currentTime = hours + ':' + minutes + ':' + seconds;

    // HTML의 <span> 요소에 현재 시간을 넣어줍니다.
    document.getElementById('currentTime').textContent = currentTime;
}

// 페이지가 로드될 때마다 현재 시간을 업데이트합니다.
window.onload = function() {
    getCurrentTime();
    // 1초마다 현재 시간을 갱신합니다.
    setInterval(getCurrentTime, 1000);
};