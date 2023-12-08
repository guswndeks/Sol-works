// for(i = 1; i <= 10; i++)
// {
    

//     for(j = 10; i <= j; j--)
//     {
//         document.write("_");
//     }

//     for(k=1; k <= i - 1; k++)
//     {
//         document.write("*");
//     }

    
//     document.write("<br>");
    
// }

//-------------------------------------------------------------------------------------------

// var name = prompt("이름을 입력하세요");
// var age = prompt("나이를 입력하세요");
// var kind = prompt("종류을 입력하세요");

// var cat = name + " / " + age + "세" + " / "  + kind;

// alert(cat);

//-------------------------------------------------------------------------------------------

// var random = Math.floor(Math.random()*10) + 1;

// for(i = 0; i <= 10; i++)
// {
//     for(j=0; j<=10;j++)
//     {
//         if(i == random)
//         {
//             break;
//         }
//         else
//         {
//             document.writeln(j);
//         }
//     }

//     document.write("<br>");


// }

// 26번 진행-----------------------------------------------------------------------------------

// var a = prompt("a 수 입력");
// var b = prompt("b 수 입력");
// var c = prompt("c 수 입력");
// var d = prompt("d 수 입력");
// var e = prompt("e 수 입력");
// var f = prompt("f 수 입력");

// if((a>b && c < d) || (e == 100 && f != 100))
// {
//     document.write("a가 b보다 크고 c가 d보다 작은 경우, 혹은 e가 100이고 f가 100이 아닌 경우를 충족했습니다.");
// }
// else
// {
//     document.write("해당 조건 충족 실패, 재확인 요망");
// }

// 27번 종료 ------------------------------------------------------------------------------------

// for(i = 0; i < 11; i++)
// {
//     if(i%2 == 1)
//     {
//         document.write(i + "는 홀수입니다." + "<br>");
//     }
//     else
//     {
//         document.write(i+ "는 짝수입니다." + "<br>");
//     }


// }

// 28번 종료  -----------------------------------------------------------------------------------


// var p1 = prompt("가위! 바위! 보! 당신의 선택은? - Player One");
// var p2 = prompt("가위! 바위! 보! 당신의 선택은? - Player Two");

// if(p1 == "가위" && p2 == "바위")
// {
// document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "p2의 승리!");
// }
// else if(p1 == "바위" && p2 == "보")
// {
//     document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "p2의 승리!");

// }
// else if(p1 == "보" && p2 == "가위")
// {
//     document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "p2의 승리!");

// }
// else
// {
//         if(p1 == "가위" && p2 == "보")
        
//         {
//             document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "p1의 승리!");
//         }
//         else if(p1 == "바위" && p2 == "가위")
//         {
//                 document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "p1의 승리!");
            
//         }
//         else if(p1 == "보" && p2 == "바위")
//         {
//                 document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "p1의 승리!");
            
//         }
//         else
//         {
//             if(p1 == "가위" && p2 == "가위")
            
//             {
//                 document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "비겼습니다.");
//             }
//             else if(p1 == "바위" && p2 == "바위")
//             {
//                     document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "비겼습니다.");

//             }
//             else if(p1 == "보" && p2 == "보")
//             {
//                     document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "비겼습니다.");

//             }
//             else
//             {
//                 document.write("p1 = " + p1 + "<br>" + "p2 = " + p2 + "<br>" + "입력오류 발생, 해당 지문대로 입력해주십시오.");
//             }
//         }
// }

// 29,30,31번 종료 --------------------------------------------------------------------------------------------------------------------





function changeImagePlayer1(condition1) {
    var ie1 = document.getElementById('ai');
    if (condition1 === "가위") {
        ie1.src = 'sissor.jpeg'; // 가위 경우
    } else if (condition1 === "바위") {
        ie1.src = 'rock.jpeg'; // 바위 경우
    } else if (condition1 === "보") {
        ie1.src = 'paper.png'; // 보 경우
    } else {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = "입력 오류 발생, 처음부터 다시!";
        document.body.appendChild(errorMessage);
        
    }
}

function changeImagePlayer2(condition2) {
    var ie2 = document.getElementById('ci');
    if (condition2 === "가위") {
        ie2.src = 'sissor.jpeg'; // 가위 경우
    } else if (condition2 === "바위") {
        ie2.src = 'rock.jpeg'; // 바위 경우
    } else if (condition2 === "보") {
        ie2.src = 'paper.png'; // 보 경우
    } else {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = "입력 오류 발생, 처음부터 다시!";
        document.body.appendChild(errorMessage);
    }

}
// window.onload 이벤트를 사용하여 DOM 로드 후 실행
window.onload = function() {
    var condition1 = prompt("가위 바위 보, 셋 중 하나를 입력하십시오.(그대로 입력해 주시기 바랍니다.) - Player 1"); // 플레이어 1 선택창
    var condition2 = prompt("가위 바위 보, 셋 중 하나를 입력하십시오.(그대로 입력해 주시기 바랍니다.) - Player 2"); // 플레이어 2 선택창
    changeImagePlayer1(condition1); // 이미지 변경 함수 호출
    changeImagePlayer2(condition2);
    ils(condition1,condition2);
};
//dw("adsljfl;");
function ils(condition1, condition2)
{
var be = document.getElementById('be');
if(condition1 == "가위" && condition2 == "바위")
{
    be.textContent = "Player 2 - WIN!";
}
else if(condition1 == "바위" && condition2 == "보")
{
    be.textContent = "Player 2 - WIN!";

}
else if(condition1 == "보" && condition2 == "가위")
{
    be.textContent = "Player 2 - WIN!";

}
else
{
        if(condition1 == "가위" && condition2 == "보")
        
        {
            be.textContent = "Player 1 - WIN!";
        }
        else if(condition1 == "바위" && condition2 == "가위")
        {
            be.textContent = "Player 1 - WIN!";
            
        }
        else if(condition1 == "보" && condition2 == "바위")
        {
            be.textContent = "Player 1 - WIN!";
            
        }
        else
        {
            if(condition1 == "가위" && condition2 == "가위")
            
            {
                be.textContent = "DRAW";
            }
            else if(condition1 == "바위" && condition2 == "바위")
            {
                be.textContent = "DRAW";

            }
            else if(condition1 == "보" && condition2 == "보")
            {
                be.textContent = "DRAW";

            }
            else
            {
                be.textContent = "입력 오류 - 다시 실행하십시오.";
            }
        }
} 
}
