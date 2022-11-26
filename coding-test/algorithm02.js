function solution(arr1, arr2) {
  let answer = 0;
  // console.log('arr1: ', arr1, 'arr2: ', arr2);
  // 체크 아웃 시간을 반복문으로 순회한다.
  // 체크 아웃 29 = 새벽 5시
  // 체크아웃이 새벽 5시 정각이나 새벽 5시를 넘어가면 오후 9시로 간주(21시)
  // 한주간 공부한 총 시간 = 하루 공부시간(체크아웃 시간 - 체크인 시간)을 각각 더한다. / answer

  for (let i = 0; i < arr2.length; i += 1) {
    // console.log(arr2[i]);
    if (arr2[i] >= 29) {
      arr2[i] = 21;
    }
    answer += arr2[i] - arr1[i]; // 하루 공부시간 더해서 추가
    // answer = answer + (arr2[i] - arr1[i];)
  }
  // console.log(arr2);
  return answer;
}

let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];

console.log(solution(arr1, arr2));