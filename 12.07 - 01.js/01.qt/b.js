document.addEventListener("DOMContentLoaded", function() {
var ID = document.getElementById("id");
var PW = document.getElementById("pw");
var BT = document.getElementById("bt");
var LB = document.getElementById("loginbox");
function lg(a,b,c)
{
    if(a.value == "qwer" && b.value == "1234")
    {
        // alert("로그인 성공");
        LB.innerHTML = "로그인 성공";
    }
    else
    {
        alert("로그인 실패");
    }
}
BT.addEventListener('click', function() {
    lg(ID, PW, LB);
});
});