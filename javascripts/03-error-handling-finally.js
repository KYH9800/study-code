function errorException(isThrow) {
  try {
    console.log('자원을 할당하였습니다.');
    if (isThrow) throw new Error();
  } catch (error) {
    console.log('에러가 발생했습니다.');
  } finally {
    console.log('자원을 제거하였습니다.');
  }
}

errorException(false);
// 자원을 할당하였습니다.
// 자원을 제거하였습니다.
errorException(true);
// 자원을 할당하였습니다.
// 에러가 발생했습니다.
// 자원을 제거하였습니다.

// `try` 에서는 HTTP연결이 되고 있거나 파일과 같은 특정한 ‘자원’을 가지고 처리할 때가 있습니다.
// 하지만 해당 ‘자원'을 계속 가지고 있으면,
// 무의미한 메모리를 차지하게 될 것 이므로 에러 여부와 상관없이 일정 시점에서는 해당 ‘자원'을 삭제 시켜야합니다.
// 그렇다면 이 ‘자원'을 삭제하는 시점은 언제가 되어야 할까요?
// 에러가 언제든지 발생할 수 있는 `try`? 아니면 에러가 일어났을 때 실행되는 `catch`?
// 이런 상황에서는 `finally`가 필요합니다.
// `finally`는 에러가 발생했는지 여부와 상관없이 언제든지 실행됩니다.
