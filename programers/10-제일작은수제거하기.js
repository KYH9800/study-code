function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }

  let _arr = arr.slice().sort((a, b) => a - b); // [ 1, 2, 3, 4 ]
  // console.log('_arr: ', _arr)

  let num = _arr[0]; // 1
  // console.log('_arr[0]: ', _arr[0])

  // console.log("찾기: ", arr.indexOf(num)) // 3
  // console.log('제거', arr.splice(arr.indexOf(num) ,1)) // 원본에서 1 찾기 // [ 1 ]

  arr.splice(arr.indexOf(num), 1);
  // console.log('원본: ', arr)

  return arr;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));

// [문제 설명]
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// [제한 조건]
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// [입출력 예]
// arr [4,3,2,1] -> return [4,3,2]
// arr[10] -> return [-1]
