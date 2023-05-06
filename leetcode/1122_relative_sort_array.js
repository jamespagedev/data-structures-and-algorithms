/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
*/

/*
Example 1:
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

Example 2:
Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]

Constraints:
1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
All the elements of arr2 are distinct.
Each arr2[i] is in arr1.
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var insertIntoSortedArr = function (arr, num, start, end) {
  if (arr.length === 0) {
    arr.push(num);
    return;
  } else if (arr.length === 1) {
    num < arr[0] ? arr.splice(0, 0, num) : arr.push(num);
    return;
  }

  const pivot = Math.ceil((start + end) / 2);

  if (pivot === 1 && num < arr[pivot] && num > arr[pivot - 1]) {
    arr.splice(1, 0, num);
    return;
  } else if (pivot === 1 && num < arr[pivot] && num <= arr[pivot - 1]) {
    arr.splice(0, 0, num);
    return;
  } else if (pivot === 1 && num > arr[pivot] && num < arr[pivot + 1]) {
    arr.splice(pivot + 1, 0, num);
    return;
  } else if (pivot === arr.length - 1 && num < arr[pivot]) {
    arr.splice(pivot, 0, num);
    return;
  } else if (pivot === arr.length - 1 && num > arr[pivot]) {
    arr.splice(pivot + 1, 0, num);
    return;
  } else if (num === arr[pivot]) {
    arr.splice(pivot + 1, 0, num);
    return;
  } else if (num > arr[pivot] && num < arr[pivot + 1]) {
    arr.splice(pivot + 1, 0, num);
    return;
  } else if (num < arr[pivot] && num > arr[pivot - 1]) {
    arr.splice(pivot, 0, num);
    return;
  }

  if (num < arr[pivot]) {
    return insertIntoSortedArr(arr, num, start, pivot);
  } else {
    return insertIntoSortedArr(arr, num, pivot, end);
  }
};

var relativeSortArray = function (arr1, arr2) {
  const arr2NumToAmount = {};
  const rightArr = [];

  const leftArr = [];
  arr2.forEach((num) => {
    arr2NumToAmount[num] = 0;
  });

  arr1.forEach((num) => {
    if (!arr2NumToAmount.hasOwnProperty(num)) {
      insertIntoSortedArr(rightArr, num, 0, rightArr.length - 1);
    } else {
      arr2NumToAmount[num] += 1;
    }
  });

  arr2.forEach((num) => {
    for (let i = 0; i < arr2NumToAmount[num]; i++) {
      leftArr.push(num);
    }
  });

  return leftArr.concat(rightArr);
};

// console.log(
//   relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]) // [2,2,2,1,4,3,3,9,6,7,19]
// );

// console.log(
//   relativeSortArray([26, 21, 11, 20, 50, 34, 1, 18], [21, 11, 26, 20]) // [21,11,26,20,1,18,34,50]
// );

console.log(
  relativeSortArray(
    [
      2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30,
      31,
    ],
    [2, 42, 38, 0, 43, 21]
  )
); // [2,42,38,0,43,21,5,7,12,12,13,23,24,24,27,29,30,31,33,48]
