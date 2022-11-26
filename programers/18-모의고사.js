function solution(answers) {
  let answer = [];
  console.log('정답: ', answers);

  // [0]idx: 1번, [1]idx: 2번, [2]idx: 3번
  let persons1 = [1, 2, 3, 4, 5];
  let persons2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let persons3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // counter
  let person1 = 0;
  let person2 = 0;
  let person3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === persons1[i % persons1.length]) {
      person1++;
    }
  }

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === persons2[i % persons2.length]) {
      person2++;
    }
  }

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === persons3[i % persons3.length]) {
      person3++;
    }
  }

  let max = Math.max(person1, person2, person3);
  console.log('max: ', max);

  if (person1 === max) {
    answer.push(1);
  }
  if (person2 === max) {
    answer.push(2);
  }
  if (person3 === max) {
    answer.push(3);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

// const oneSet = new Set(one);
// const uniqueOne = [...oneSet];

// const twoSet = new Set(two);
// const uniqueTwo = [...twoSet];

// const threeSet = new Set(three);
// const uniqueThree = [...threeSet];

// 완전 탐색
// 1. 반복문을 통해 구현
// 2. 재귀함수를 이용해 구현
// 2-1. 재귀함수의 경우 쉽게 무한루프에 빠질 수 있으므로, 탈출 조건을 꼭 미리 명시해두어야 함
// 2-2. 재귀함수는 동적 계획법, 백트랙킹, 탐욕법(greedy algorithm)으로 구현 가능

/*
[문제 설명]
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

[제한 조건]
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

[입출력 예]
answers	    | return
[1,2,3,4,5]	| [1]
[1,3,2,4,2]	| [1,2,3]

[입출력 예 설명]
입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.
*/
