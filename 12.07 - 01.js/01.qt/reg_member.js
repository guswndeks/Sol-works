document.addEventListener("DOMContentLoaded", function() {

var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

// 년 선택을 위한 옵션 추가(1940부터 2007까지)

var yearSelect = document.getElementById("by");
  for (var i = 2007; i >= 1940; i--) {
    var option = document.createElement("option");
    
    option.text = i;
    option.value = i;
    yearSelect.add(option);
  }

// 월 선택을 위한 옵션 추가
var monthSelect = document.getElementById("bm");
for (var i = 0; i < months.length; i++) {
  var option = document.createElement("option");
  option.text = months[i];
  option.value = months[i];
  monthSelect.add(option);
}

// 일 선택을 위한 옵션 추가 (1일부터 31일)
var daySelect = document.getElementById("bd");
for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  var dayValue = i < 10 ? "0" + i : "" + i;
  option.text = dayValue;
  option.value = dayValue;
  daySelect.add(option);
}

// 성별 라디오 버튼 읽는 작업
var sex = document.getElementsByName("sex");

for(i = 0; i <= sex.length; i++)
{
    if(sex[i].checked == true)
    {
        sex = sex[i].value;
        
    }
}

// 일반 작업 (Basic Data)---------------------------------------------------------------------------

var id = document.getElementById("id");

var pw = document.getElementById("pw");
var pw2 = document.getElementById("pw2");

var nm = document.getElementById("nm");

var em = document.getElementById("em");

var by = document.getElementById("by");
var bm = document.getElementById("bm");
var bd = document.getElementById("bd");



var nh = document.getElementById("nh");
var nb = document.getElementById("nb");
var na = document.getElementById("na");

var rm = document.getElementById("rm");

// work ------------------------------------------------------------------------------------


//비밀번호 체크 - a는 비밀번호, b는 재입력 비밀번호, 성공시 a(비밀번호)를 리턴, 실패시 재입력 요청 리턴 (pw,pw2)
var Password = function(a,b)
{
    if(a == b)
    {
        return a;
    }
    else
    {
        document.write("비밀번호를 다시 확인해주십시오.");
        return null;
    }
}

// 생년월일 - 년월일 받은다음 ~"년" ~"월" ~"일" 하나로 뭉쳐서 리턴 (by,bm,bd)

var Birth = function(y,m,d)
{
    var birthYMD = y + "년 " + m + "월 " + d + "일 "
    return birthYMD;
}

// 전화번호  - 전화번호 세줄 받은다음 ~ - ~ - ~ 로 뭉쳐서 리턴 (nh,nf,na)

var PhoneNumber = function(a,b,c)
{
    var PN = a + " - " + b + " - " + c;
    return PN;
}

var Show = function(a,b,c,d,e,f)
{
    document.write("아이디 = " + a + "<br>" + "비밀번호 = " + b + "<br>" + "이름 = " + c + "<br>" + "이메일 = " + d + "<br>" + "생년월일 = " + e + "<br>" + "전화번호 = " + f + "<br>" + "회원가입을 축하드립니다." + "<br>");
}

// 회원가입 버튼 - 버튼 클릭 시 위 함수들에 보내서 다 받아온 다음 null값 없을 시 최종적으로 회원가입 정보와 회원가입 성공 이미지 띄움

rm.addEventListener('click', function() {
    // 클릭 시 실행할 코드 작성
    a = id.value ; 
    b = Password(pw.value,pw2.value);
    c = nm.value;
    d = em.value;
    e = Birth(by.value,bm.value,bd.value);
    f = PhoneNumber(nh.value,nb.value,na.value);

    if(a != null && b != null && c != null && d != null && e != null && f != null)
    {
        Show(a,b,c,d,e,f);
    }
    else
    {
        document.write("모두 채워주십시오.");
    }



    
  });














});