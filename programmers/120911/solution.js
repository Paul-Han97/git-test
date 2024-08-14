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