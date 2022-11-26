// 에러를 핸들링하는 과정만 공부하였다면, 에러는 무조건 차단하고 발생시키면 안되는 걸까요?
// 아닙니다. 프로그래머의 입장에서 에러는 고의로 에러를 발생시키기도 해야합니다.
// 예를 들어서 은행 어플리케이션의 현금 인출 서비스를 만든다고 할 때,
// 계좌의 잔고가 요청받은 금액보다 적다면 현금 인출을 막고 예외를 발생시켜야겠죠? 이럴때 사용하는 것이 `throw`입니다.

function withdraw(amount, account) {
  if (amount > account.balance) {
    throw new Error('잔고가 부족합니다.');
  }
  account.balance -= amount; // account.balance = account.balance - amount
  console.log(`현재 잔고가 ${account.balance}남았습니다.`); // 출력되지 않음
}

const account = { balance: 1000 }; // 잔고
withdraw(3000, account); // 출금할 금액
