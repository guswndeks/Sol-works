alert("동참은 마스터정돈 찍고 해라"); // 팝업 - 괄호 내용
// var button = document.getElementById('p1b');

//         // 버튼에 클릭 이벤트 추가
//         button.addEventListener('click', function() {
//             // b.html로 이동
//             window.location.href = 'https://www.op.gg';
//         });

//         document.write("블랑카");
//         console.log("버튼 작동 확인");



        // DOM이 완전히 로드된 후에 실행
        document.addEventListener('DOMContentLoaded', function() {
            // 버튼 요소 가져오기
            var button = document.getElementById('opggButton');

            // 버튼에 클릭 이벤트 추가
            button.addEventListener('click', function() {
                // op.gg로 이동
                window.location.href = 'https://www.op.gg';
            });
        });
   