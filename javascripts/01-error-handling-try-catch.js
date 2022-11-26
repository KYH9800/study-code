const users = ['Lee', 'Kim', 'Park', 2];

try {
  for (const user of users) {
    console.log(user.toUpperCase());
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
}

// LEE
// KIM
// PARK
// Error: user.toUpperCase is not a function
