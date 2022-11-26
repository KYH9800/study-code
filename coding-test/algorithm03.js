function solution(s) {
  let answer = '';
  let min = [];
  let max = [];
  // console.log('s', s);
  // 반복문으로 s를 돌아서 s % 2 === 0 로 소수 여부 판별, Math.sqrt() - mdn
  // 소수인 숫자 primeNumber에 추가
  // primeNumber 최대값 Math.max() 활용 추출
  // 소수가 아닌 숫자 notPrimeNumber에 추가
  // notPrimeNumber 최소값 Math.min() 활용 추출
  // answer = "primeNumber/Math.max() notPrimeNumber/Math.min()"
  let sNumber = s.split(' ');
  console.log(sNumber);

  for (let i = 1; i < sNumber.length; i++) {
    console.log('sNumber[i]: ', sNumber[i]);
    if (parseInt(sNumber[i]) % 2 === 0) {
      min.push(sNumber[i]);
    } else if (parseInt(sNumber[i] % 2) !== 0) {
      max.push(sNumber[i]);
    }
  }
  console.log('min, max: ', min, max);
  return answer;
}

let s = '97 75 88 99 95 92 73';
console.log(solution(s));
