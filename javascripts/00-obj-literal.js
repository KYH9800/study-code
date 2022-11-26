const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

console.log(calculator.add(1, 2)); // 3
console.log(calculator.sub(3, 1)); // 2
console.log(calculator.mul(5, 3)); // 15
console.log(calculator.div(4, 2)); // 2

// 객체 리터럴을 활용해 사칙연산을 하는 객체를 만들어주세요!

// [요구 사항]
// 1. 객체명은 `calculator`로 작성해주세요!
// 2. `add`, `sub`, `mul`, `div` 메서드를 구성해주세요!
