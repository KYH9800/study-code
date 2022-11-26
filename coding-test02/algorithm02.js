function solution(star) {
  // 코드 작성
  let starString = '';

  for (let i = 0; i <= star; i++) {
    for (let j = star; j > i; j -= 1) {
      starString += ' ';
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      starString += '*';
    }
    starString += '\n';
  }
  console.log(starString);
}

let star = 9;
solution(star);

/*
다음 예제와 같이 삼각형 모양으로 ‘*’을 출력하세요.

    *
   ***
  *****
 *******
*********
*/
