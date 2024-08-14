# 문제
[백준 2750]

[프로그래머스 120911]

## 알고리즘
* Bubble Sort

## 시간복잡도
* Bubble Sort
    * 오름차순으로 정렬된 경우 O(N)
    * 일반적인 경우 O(N^2)

## 문제 풀이
* 

## 코딩
```js
function bubbleSort(arr) {
  let flag;
  for (let i = arr.length; i > 0; i--) {
    flag = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
    }
    if (flag) break;
  }
  return arr;
}
```
[백준 2750]:https://www.acmicpc.net/problem/2750
[프로그래머스 120911]:https://school.programmers.co.kr/learn/courses/30/lessons/120911