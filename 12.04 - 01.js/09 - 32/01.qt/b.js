var random;
random = Math.floor(Math.random()*100) + 1;

var s = "참 다행스럽게도 주사위를 굴려 ( " + random + " ) 이 나왔습니다." ;

var p;

p = Math.floor(Math.random()*3) + 1;

k = Math.floor(Math.random()*6) + 1;


// var alpha = 23;
// var beta = 14;
// var sum = alpha + beta;
// document.write(alpha + " + " beta  + " =  " + sum);

document.addEventListener('DOMContentLoaded', function() {
    // 버튼 요소 가져오기
    var marine = document.getElementById('marine');

    // 버튼에 클릭 이벤트 추가
    marine.addEventListener('click', function() {
       
        // if(random > 50 && random < 90)
        // {
        //     document.write(s);
        // }
        // else if(random>= 90)
        // {
        //      document.write("아주 뛰어나게도 " + random + " 이 나왔습니다");
        // }
        // else
        // {
        //     document.write("너무 미개한 결과라 출력을 배제했습니다.");
        // };

        // switch(p){
        //     case 1 : 
        //         document.write("이런 아주 미개한... " + p + " 같은 결과가....");
        //         break;

        //     case 2 :
        //         document.write("그냥 뭐 쏘쏘한 " + p + " 이 나왔네");
        //         break;

        //     case 3 :
        //         document.write("매우 위대한 " + p + " 이 나오셨군요. 축하드립니다.");
        //         break;
        //     // default : 
        //     // document.write("뭐... " + p + "가 나왔네요 쩝" );
        //     //     break;
        // }

        for(i = 1; i < 5000; i++)
        {
            document.writeln("해병에 적합한 신체를 가지고도 해병이 아니라니, 이는 명백한 탈영행위에 해당한다! 지금부터 자진 입대를 실시한다!");
            
        }
    });
        var ignore = document.getElementById('ignore');

        ignore.addEventListener('click',function() {
            for(i = 1; i < random; i++)
        {
            document.writeln(random);
            
        }

        });



    });

//-----------------------------------------------------------------------------------------------------------------------

    // for(var i=1 ; i <= random ; i = i + 1 ){
        
    //     if(i == 7)
    //     {
    //         id='qb';
    //     document.write("<img id = 'qb' src = 'bird.jpg'>" + i);
        
    //     }
    //     else
    //     {
    //         document.write("<img src='bird.jpg'>" + i);
    //     }
    // }

    // var ka = "주사위 숫자는";

//-----------------------------------------------------------------------------------------------------------------------

    // switch(k)
    // {
    //     case 1 : 
    //         document.write(ka + "1");
    //         break;
    //     case 2 : 
    //         document.write(ka + "2");
    //         break;
    //     case 3 : 
    //         document.write(ka + "3");
    //         break;
    //     case 4 : 
    //         document.write(ka + "4");
    //         break;
    //     case 5 : 
    //         document.write(ka + "5");
    //         break;
    //     case 6 : 
    //         document.write(ka + "6");
    //         break;

    // }

//-----------------------------------------------------------------------------------------------------------------------

    // var k;
    // for(k = 1; k <= 10; k++)
    // {
    //     document.writeln(k);
    // }

    // if(random > 50)
    // {
    //     alert(random + "은 50보다 크다.");
    // }
    // else
    // {
    //     alert(random + "은 50보다 작다.");
    // }

//-----------------------------------------------------------------------------------------------------------------------

    // var d = prompt("값을 입력하십시오.");
    // if(d < 100)
    // {
    //     alert(d + "는 100보다 작습니다.");
    // }
    // else if(d > 100)
    // {
    //     alert(d + "는 100보다 큽니다.");
    // }
    // else
    // {
    //     alert(d + "는 100입니다.");
    // }

//-----------------------------------------------------------------------------------------------------------------------

    // switch(d)
    // {
    //     case "1" :
    //         alert(d);
    //         break;
    //     case "2" : 
    //         alert(d);
    //         break;
    //     case "3" :
    //         alert(d);
    //         break;
    //     default :
    //         alert("1,2,3이 아닙니다.");
    //         break;

    // }
//-----------------------------------------------------------------------------------------------------------------------
    // window.onload = function(){


    //     var t = document.getElementById("ft");
    
    //     var s ="";

    //     var si = 0;
        
        
    //     while(true){
        
    //         s = prompt("값을 입력하세요 :");
    //         var si = Number(s);
        

    //         if(si==100)
    //         {
    //             t.innerHTML = "마지막 입력값:"+s+"<br>";
    //             break;
    //         }
    //         else
    //         {
    //             t.innerHTML = "마지막 입력값:"+s+"<br>";
                

    //         }
    //     }
    
    // }

    //-----------------------------------------------------------------------------------------------------------------------

    // 
    // var i = 1;
    // while( i < 11)
    // {
    //     document.write(i);
    //     i++;

    // }
    var k = "*";
    for(i = 0; 1 <= 10; i++)
    {
        document.write("*");
    }



