//* 요구 사항에 맞는 클래스를 완성해주세요!
// 1. `Unit` 클래스를 만든다.
// 2. 클래스 생성자에서 내부변수 **name**, **hp**를 정의한다.
// 3. `healing`, `damaged` 메서드를 정의한다.
// 4. `healing` 메서드는 hp를 올릴 수 있고 hp가 100이 넘을 경우 더이상 회복되지 않는다.
// 5. `damaged` 메서드는 hp를 감소 시킬 수 있고 hp가 0이 넘을 경우 더이상 감소되지 않는다.
// 6. **hp**가 0이 되었을 경우 더이상 `healing` 메서드와 `damaged` 메서드가 동작하지 않는다.

class Unit {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  healing(heal) {
    // console.log(this.name, this.hp);
    if (this.hp <= 0) return;
    this.hp += heal;
    if (this.hp >= 100) {
      return (this.hp = 100);
    }
    // console.log(this.name, this.hp);
  }
  damaged(damage) {
    // console.log(this.name, this.hp);
    if (this.hp <= 0) return;
    this.hp -= damage;
    if (this.hp <= 0) {
      return (this.hp = 0);
    }
    // console.log(this.name, this.hp);
  }
}

const log = console.log;
const unit = new Unit('메타몽', 100);
log(unit.damaged(70)); // 30
log(unit.healing(10)); // 40
log(unit.damaged(50)); // 0
log(unit.healing(100)); // 0
