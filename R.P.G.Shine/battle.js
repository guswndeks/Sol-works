let M; // M 변수를 밖에서 정의


document.addEventListener("DOMContentLoaded", function() {


    // URL에서 MapNumber 값을 가져오는 함수
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // URL에서 MapNumber 값을 읽어옴
    var mapNumber = getParameterByName('MapNumber');
    
    // 가져온 값 확인 (콘솔에 출력)
    console.log("MapNumber:", mapNumber);

    if (mapNumber == 1) {
        import('./main.js').then(module => {
            const SvFrontMonster = module.SvFrontMonster;

            M = getMonster(); // M 값을 설정

            let matchedInstance;

            // SvFrontMonster 인스턴스를 생성하고 label 값이 M과 일치하는지 확인하는 함수
            function createAndFindMatchingInstance(labelValue) {
                const instance = new SvFrontMonster(labelValue);
                if (instance.label === M) {
                    matchedInstance = instance;
                }
            }

            // 여러 인스턴스를 생성하고 일치하는 값을 찾을 수 있도록 반복문 사용
            for (let i = 0; i < 5; i++) { // 예시로 10개의 인스턴스 생성
                createAndFindMatchingInstance(i); // 예시로 인스턴스에 순차적인 값을 넣음
            }

            if (matchedInstance) {
                console.log('Matched label:', matchedInstance.label);
                // 여기서 matchedInstance에 해당하는 작업을 수행합니다.
            } else {
                console.log('No match found.');
            }

            console.log(M); // M 값을 콘솔에 출력
            // M 값을 HTML에 추가하기 위한 코드
            var myDiv = document.createElement('div');
            myDiv.textContent = M;
            document.body.appendChild(myDiv);
        });
    }


// 특정 확률에 따라 1,2,3 중 하나를 뽑아서 위 함수 중 M 변수로 보냄.(해당 숫자는 이후 main.js/~Monster 내 label과 비교, 동일 label을 가진 인스턴스를 가져옴.)
function getMonster()
{
    var randomNumber = Math.random();
    var coin;

    if (randomNumber < 0.5) { // 50%의 확률
        coin = 1;
    } else if (randomNumber < 0.9) { // 40%의 확률 (남은 50% 중에서)
        coin = 2;
    } else { // 10%의 확률 (남은 10% 중에서)
        coin = 3;
    }
    return coin;

}
    var myDiv = document.createElement('div'); // 새로운 div 요소 생성
    myDiv.textContent = M; // div에 M 값을 추가
    document.body.appendChild(myDiv); // body에 해당 div를 추가

});








// while(true){
// 	proc_battle();

// 	if(elf.hp <= 0 || dragon.hp <= 0){
// 		break;
// 	}
// }

