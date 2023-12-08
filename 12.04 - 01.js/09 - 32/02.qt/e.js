// 로 1 - 37번 문제 ---------------------------------------------------------------------------------
var a0 = Math.floor(Math.random() * 45) + 1;
var a1 = Math.floor(Math.random() * 45) + 1;
var a2 = Math.floor(Math.random() * 45) + 1;
var a3 = Math.floor(Math.random() * 45) + 1;
var a4 = Math.floor(Math.random() * 45) + 1;
var a5 = Math.floor(Math.random() * 45) + 1;
var a6 = Math.floor(Math.random() * 45) + 1;
var a7 = Math.floor(Math.random() * 45) + 1;

var b1 = Number(prompt("1~45번 중 6개의 숫자를 골라주세요. - 1번 (중복 허용)"));
var b2 = Number(prompt("1~45번 중 6개의 숫자를 골라주세요. - 2번 (중복 허용)"));
var b3 = Number(prompt("1~45번 중 6개의 숫자를 골라주세요. - 3번 (중복 허용)"));
var b4 = Number(prompt("1~45번 중 6개의 숫자를 골라주세요. - 4번 (중복 허용)"));
var b5 = Number(prompt("1~45번 중 6개의 숫자를 골라주세요. - 5번 (중복 허용)"));
var b6 = Number(prompt("1~45번 중 6개의 숫자를 골라주세요. - 6번 (중복 허용)"));


document.write("이번 주 당첨번호는 ! " + "<br>" + a1 + " / " + a2 + " / " + a3 + " / " + a4 + " / " + a5 + " / " + a6 + " / " + " + " + a7 + "<br>");
document.write("당신의 제출번호는 ! " + "<br>" + b1 + " / " + b2 + " / " + b3 + " / " + b4 + " / " + b5 + " / " + b6 );

// a와 b 배열 생성
var a = [a1, a2, a3, a4, a5, a6];
var b = [b1, b2, b3, b4, b5, b6];

// 컴퓨터 중복 검사
var duplcheck = false;
for (i = 0; i < a.length; i++)
{
    if(a.indexOf(a[i]) !== i)
    {
        duplcheck = true;
        break;
        
    }
}

if(duplcheck == true)
{
    document.write("중복값이 확인되었습니다. 다시 실행합니다.");
        location.reload(true);
}


// 일치하는 요소 수 세기
var matchingCount = 0;
for (var i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
        matchingCount++;
    }
}



document.write("<br>" + "당첨 개수는 = " + matchingCount + "<br>");

//보너스 요소 세기


if(matchingCount == 6)
{
    document.write("1등입니다. 축하드립니다.");
}
else if(matchingCount == 5 && b.includes(a7))
{
    document.write("2등입니다. 축하드립니다.");
}
else if(matchingCount == 5)
{
    document.write("3등입니다. 축하드립니다.");
}
else if(matchingCount == 4)
{
    document.write("4등입니다. 축하드립니다.");
}
else
{
    document.write("꽝이군요. 다음에 다시 시도해 주십시오.");
}
