function solution(n) {
  let numSplit = (n + '').split('');
  let arr = [];

  for (let i = numSplit.length - 1; i >= 0; i -= 1) {
    arr.push(parseInt(numSplit[i]));
    arr.sort((a, b) => b - a);
    // console.log('arr:', arr);
  }
  // console.log(parseInt(arr.join('')));
  return parseInt(arr.join(''));
}

console.log(solution(118372));

// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

// 입출력 예
// n	return
// 118372	873211
