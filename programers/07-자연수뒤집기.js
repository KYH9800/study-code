function solution(n) {
  // 받아온 숫자를 문자열로 만들고, 하나씩 나눈다.
  // arr 배열에 numToString 뒤의 숫자부터 배열에 삽입한다.
  // 반복문 거꾸로 시작점: (배열의 길이 -1)부터 시작, 0보다 크고/같음, 1씩 감소
  // 맨끝 숫자부터 arr에 삽입

  // let numToString = n.toString().split('');
  // let array = [];
  // console.log(numToString)

  // for(let i = numToString.length - 1; i >= 0; i -= 1){
  //      array.push(Number(numToString[i]));
  // }
  // return array;

  return n
    .toString()
    .split('')
    .reverse()
    .map((val) => parseInt(val));
}

console.log(solution(12345));

// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]
