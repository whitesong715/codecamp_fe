// class Date {
//   qqq = 3;

//   getFullYear() {}
//   getMonth() {}
// }

// const date = new Date();
// console.log(date.getFullYear);
// console.log(date.getMonth() + 1);

class Monster {
  power = 50;

  attack() {
    console.log("공격합니다!");
  }
}

//상속
class 슈퍼몬스터 extends Monster {
  run() {
    console.log("도망챠!");
  }

  //오버라이딩
  attack() {
    console.log("슈퍼몬스터 필살기");
  }
}

const monster = new Monster();

monster.power;
monster.attack();

const superMonster = new 슈퍼몬스터();
superMonster.power;
superMonster.attack();
superMonster.run();
