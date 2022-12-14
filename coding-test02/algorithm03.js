function solution(arr1) {
  // let answer = [[], [], [], [], []];
  // let check = [[], [], [], [], []];
  for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
    for (let j = 0; j < arr1.length; j++) {
      // console.log(arr1[i][j]);
      // console.log(arr1[j][i]);
      let target = arr1[i][j];

      if (
        target > (arr1[i - 1]?.[j] || 0) &&
        target > (arr1[i + 1]?.[j] || 0) &&
        target > (arr1[i]?.[j - 1] || 0) &&
        target > (arr1[i]?.[j + 1] || 0)
      ) {
        arr1[i][j] = '*';
      }
    }
    console.log(...arr1[i]);
  }
  // console.log(arr1);
}

let arr1 = [
  [7, 4, 6, 5, 9],
  [6, 1, 3, 4, 5],
  [4, 8, 5, 6, 9],
  [1, 3, 0, 6, 4],
  [6, 4, 8, 1, 7],
];

let arr2 = [
  [3, 4, 1, 4, 9],
  [2, 9, 4, 5, 8],
  [9, 0, 8, 2, 1],
  [7, 0, 2, 8, 4],
  [2, 7, 2, 1, 4],
];

solution(arr1);
solution(arr2);

/*
if (arr1[i - 1]?.[j] && arr1[i - 1][j] > arr1[i][j]) {
        // 3, 1 / 아래 비교
        arr1[i][j] = '*';
      }
      if (arr1[i + 1]?.[j] && arr1[i + 1][j] > arr1[i][j]) {
        // 3, 1 / 위를 비교
        arr1[i][j] = '*';
      }
      if (arr1[i]?.[j - 1] && arr1[i][j - 1] > arr1[i][j]) {
        // 3, 2 / 우측 수와 비교
        arr1[i][j] = '*';
      }
      if (arr1[i]?.[j + 1] && arr1[i][j + 1] > arr1[i][j]) {
        // 3, 2 / 좌측 수와 비교
        arr1[i][j] = '*';
      }
*/

/*
[문제]
5x5 2차원 배열이 주어질 때 어떤 원소가 상하좌우에 있는 원소보다 클 때 해당 위치에 * 을 표시하는 프로그램을 작성하세요.
경계선에 있는 수는 상하좌우 중 존재하는 원소만을 비교합니다.

[입력]
[
  [3,4,1,4,9],
  [2,9,4,5,8],
  [9,0,8,2,1],
  [7,0,2,8,4],
  [2,7,2,1,4]
]

[result]
3 4 1 4 *
2 * 4 5 8
* 0 * 2 1
7 0 2 * 4
2 * 2 1 4

---------------

[입력]
[
  [7,4,6,5,9],
  [6,1,3,4,5],
  [4,8,5,6,9],
  [1,3,0,6,4],
  [6,4,8,1,7]
]

[result]
* 4 * 5 *
6 1 3 4 5
4 * 5 6 *
1 3 0 6 4
* 4 * 1 *
*/
