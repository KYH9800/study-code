// 생성자(Constructor)

// “클래스 내부에서 `constructor()`로 정의한 메서드를 "**생성자**"라고 부릅니다.
// 미리 정의한 클래스를 기반으로 **인스턴스를 생성**할 때 Javascript 내부에서 호출되는 메서드인데요.
// 아래와 같이 사용할 수 있습니다.

class User {
  constructor(name, age, tech) {
    // User 클래스의 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
    console.log('this: ', this); // User 객체(지역 스코프)를 가리킴
    // [this??]
    // this는 클래스를 사용해 만들어 질 객체 자신을 의미하고
    // this 뒤에 붙는 name, age, tech는 클래스를 이용해서 만들어질 객체의 속성(Propety)입니다.
  }
}

const user = new User('이용우', 28, 'Node.js'); // user 인스턴스 생성
const userTest = new User('고윤혁', 30, 'Express'); // userTest 인스턴스 생성

console.log(user.name); // 이용우
console.log(user.age); // 28
console.log(user.tech); // Node.js

console.log(userTest.name); // 고윤혁
console.log(userTest.age); // 30
console.log(userTest.tech); // Express
