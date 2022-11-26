// 메서드(Method)

// 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값으로 사용할 수 있는데요.
// [프로퍼티 값이 함수일 경우]에는 일반 함수와 구분하기 위해 [메서드(Method)]라고 부릅니다.
// 즉, **메서드는 객체(Object) 에 묶여 있는 함수**를 의미합니다.
// 클래스에서도 데이터를 나타내는 속성뿐만아니라 함수와 같이 특정 코드를 실행할 수 있는 문법을 사용할 수 있는데요,
// 여기서는 Class라는 객체(Object)에 묶여있는 함수를 **메서드(Method)**라고 부릅니다.

class User {
  constructor(name, age, tech) {
    this.name = name;
    this.age = age;
    this.tech = tech;
  }

  // Method
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getTech() {
    return this.tech;
  }
}

user = new User('고윤혁', 30, 'NodeJS');
console.log('user name: ', user.name);
console.log('user age: ', user.age);
console.log('user tech: ', user.tech);

// clase Method 호출
console.log('user name method: ', user.getName());
console.log('user age method: ', user.getAge());
console.log('user tech method: ', user.getTech());
