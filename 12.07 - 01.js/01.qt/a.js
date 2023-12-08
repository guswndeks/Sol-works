// function al()
// {
//     return 100;
// }
// function be()
// {
//     return 200;
// }

// function se(d,f)
// {
//      var c = d + f;
//      return c;
// }

// var g = se(al(),be());
// document.write(g);


// function cat(){
//     return 100;
// }

// function cat2(){
//     return 200;
// }

// function add_a_plus_b(a,b){

//     var zz = a + b;

//     return zz;
// }


// var y = add_a_plus_b( cat(), cat2() );

// document.write(y);

// 42번 문제 완 ---------------------------------------------------------------------------------

// function a(x)
// {
//   var y = x + 1;
//   return y;
// }

// var z = a(7);
// var w = a(z);
// document.write(a(a(a(7))));

// 43, 44번 문제 완 -----------------------------------------------------------------------------

function cat()
{
    this.name = "";
    this.color = "";
    this.age = 0;
    this.weight = 0;
    this.family = "";

    this.crying = function()
    {
        document.write("<br> 야옹 <br>");
    }

    this.eat = function(food)
    {
        document.write("<br>" + this.name + "가 " + food + "를 먹습니다.<br>");
    }
}

var c = new cat();
c.name = "씨다씨";
c.age = 4;
c.color = "Black and White";
c.family = "시고르자브";
c.weight = 8;

// document.write(c.name + " / " + c.age + " / " + c.color + " / " + c.family + " / " + c.weight);

var d = new cat();
d.name = "디다디";
d.age = 6;

function e(u,q)
{
    if(u.age > d.age)
    {
        var k = "<br> 형님고양이 : " + u.name + " / " + "동생고양이 : " + d.name + "<br>";
        
    }
    else if(d.age > u.age)
    {
        var k = "<br> 형님고양이 : " + d.name + " / " + "동생고양이 : " + u.name + "<br>";
        
    }
    else
    {
        var k = "<br>" + u.name + "과" + d.name + "은 친구고먐미 <br>";
    }

    return k;
}



document.write(e(c,d));

d.crying();
c.crying();
d.eat("참치");
c.eat("캣닢");
