function solution(month, day) {
  let result = '';

  // new Date(), getDate(), getMonth(), getFullYear() mdn 참고
  // 받아오는 매개변수를 시작일로 설정
  // 시작일로부터 98일 뒤의 날짜를 추출
  // 년, 월, 일을 변수에 담는다.

  let startDay = new Date(2022, month - 1, day + 1);
  // console.log('startDay: ', startDay);
  let afterDay = new Date(startDay.setDate(startDay.getDate() + 98)); // 내일
  // console.log('afterMonth: ', afterDay);

  let years = afterDay.getFullYear();
  let months = afterDay.getMonth() + 1;
  let days = afterDay.getDate() - 1;

  result = `시작일 ${month}월 ${day}일로 부터 ` + `수료일은 ${years}년 ${months}월 ${days}일 입니다.`;
  // console.log(result);
  return result;
}

console.log(solution(1, 18));
