function solution(arr1) {
  let answer = '';
  let front = 0; // 앞
  let back = 0; // 뒤

  for (let i = 0; i < arr1.length; i++) {
    // console.log('arr1[i]: ', arr1[i]);
    if (arr1[i] === 0) {
      back++;
    } else if (arr1[i] === 1) {
      front++;
    }
  }

  if (back === 1 && front === 3) {
    answer = '도';
  } else if (back === 2 && front === 2) {
    answer = '개';
  } else if (back === 3 && front === 1) {
    answer = '걸';
  } else if (back === 4) {
    answer = '윷';
  } else if (front === 4) {
    answer = '모';
  }
  // console.log('front: ', front);
  // console.log('back: ', back);
  return answer;
}

let arr1 = [0, 1, 0, 0]; // 걸
console.log(solution(arr1));
console.log(solution([0, 1, 0, 1])); // 개
console.log(solution([1, 1, 1, 0])); // 도
console.log(solution([0, 0, 1, 1])); // 개
console.log(solution([0, 0, 0, 0])); // 윷
console.log(solution([1, 1, 1, 1])); // 모

/*
우리나라 고유의 윷놀이는 네 개의 윷짝을 던져서 배(0)와 등(1)이 나오는 숫자를 세어 도, 개, 걸, 윷, 모를 결정합니다.
네 개 윷짝을 던져서 나온 각 윷짝의 배 혹은 등 정보가 주어질 때
도(배 1개, 등 3개), 개(배 2개, 등 2개), 걸(배 3개, 등 1개), 윷(배 4개), 모(등 4개) 중 어떤 것인지를 결정하는 프로그램을 작성하세요.

[입출력 예]
[0,1,0,1]	개
[1,1,1,0]	도
[0,0,1,1]	개

[지정 입력값]
[0,1,0,0]	걸
*/
