/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let pivot;

  while (low <= high) {
    pivot = Math.floor((low + high) / 2);
    if (arr[pivot] == target) {
      return pivot;
    } else if (arr[pivot] > target) {
      high = pivot - 1;
    } else {
      low = pivot + 1;
    }
  }

  if (target > arr[pivot]) {
    return low;
  } else {
    return pivot;
  }
};

console.log(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 4)); // 2
