export function Monster(name,hp,attack,label){ 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.hp = hp;    // 체력
    this.attack = attack; // 공격력
    this.label = label;
    this.info = function(){
        hr();
        dw("["+name+"]["+hp+"][atk:"+attack+"]");
        hr();
    }
}

export function SvFrontMonster()
{
    var rabbit = new Monster("토끼",10,1,1);
    var snake = new Monster("뱀",10,3,2);
    var buck = new Monster("사슴",30,5,3);
    
}

export function DeepForest1Monster()
{
    var fox = new Monster("여우",25,10,1);
    var bear = new Monster("곰",60,35,2);
    var wolf = new Monster("늑대1",35,15,3)("늑대2",35,15,3)("늑대 대장",45,23,3);
}

function Character(name,hp,attack,mp){ 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.hp = hp;    // 체력
    this.attack = attack; // 공격력
    this.mp = mp;

    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"][mp:"+this.mp);
        hr();
    }
}

var elf = new Character("엠피스",200,20,100);


elf.info();

