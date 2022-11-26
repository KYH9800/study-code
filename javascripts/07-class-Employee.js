//* [상속이란?]
// 일반적으로 클래스의 인스턴스는 선언한 클래스의 기능을 [모두] 상속합니다.
// 상속을 이용해 [부모 클래스]와 [자식 클래스]로 나뉠 수 있는데요.
// 부모 클래스의 경우 메서드, 내부 변수와 같은 정보를 자식 클래스에게 할당해줄 수 있습니다.
// 그렇다면 상속을 이용하여 자식 클래스를 생성해볼까요?

//* User를 상속하는 Employee
// 아래의 예제는 우선 User 클래스를 정의하고,
// Employee라는 이름의 새로운 클래스가 User를 상속합니다.
// 생성자 내부의 super()는 생성자 내에서만, 그리고 this 키워드를 사용하기 전에만 쓸 수 있습니다.

//* Employee를 User의 서브 클래스로 정의합니다.
//* User의 자식 클래스인 Employee에서 User.getTech() 메서드를 호출합니다.

class User {
  // User 부모 클래스
  constructor(name, age, tech) {
    // 부모 클래스 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
  getTech() {
    return this.tech;
  } // 부모 클래스 getTech 메서드
}

class Employee extends User {
  // Employee 자식 클래스
  constructor(name, age, tech) {
    // 자식 클래스 생성자
    super(name, age, tech);
  }
}

const employee = new Employee('이용우', '28', 'Node.js');
console.log(employee.name); // 이용우
console.log(employee.age); // 28
console.log(employee.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js

//! [-`super` 키워드는 무엇인가요?]
// `super` 키워드는 함수처럼 호출할 수도 있고, `this`와 같이 식별자처럼 참조할 수 있는 키워드입니다.
// `super` 키워드를 호출하면 **부모 클래스**의 **생성자**(constructor)를 호출합니다.
// `super` 키워드를 참조하면 **부모 클래스**의 **메서드**(Method)를 호출할 수 있습니다.
