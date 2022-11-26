const users = ['ko', 'kim', 'park', 'choi', 2];

try {
  for (const index in users) {
    console.log(users[index]); // for...in 은 인덱스를 뽑아냄
  }
  for (const user of users) {
    console.log(user.toUpperCase()); // KO,KIM, PARK, CHOI
  }
} catch (err) {
  console.log(`Eerror: ${err}`); // 2에서 error 발생, TypeError: user.toUpperCase is not a function
}
