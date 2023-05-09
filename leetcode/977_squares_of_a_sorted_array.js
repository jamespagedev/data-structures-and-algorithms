/*
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1st solution
// var binaryInsert = function (arr, num) {
//   if (arr.length === 0) {
//     arr.push(num);
//     return;
//   }
//   let start = 0;
//   let pivot;
//   let end = arr.length - 1;

//   while (start <= end) {
//     pivot = Math.floor((start + end) / 2);
//     if (arr[pivot] === num) {
//       arr.splice(pivot, 0, num);
//       return;
//     } else if (num < arr[pivot]) {
//       end = pivot - 1;
//     } else {
//       start = pivot + 1;
//     }
//   }

//   if (num > arr[pivot]) {
//     arr.splice(start, 0, num);
//   } else {
//     arr.splice(pivot, 0, num);
//   }
// };
// var sortedSquares = function (nums) {
//   let squaredArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     binaryInsert(squaredArr, Math.abs(nums[i]) * Math.abs(nums[i]));
//   }
//   return squaredArr;
// };

// optimal solution
var sortedSquares = function (nums) {
  let startIndex = 0,
    endIndex = nums.length - 1;
  const result = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[startIndex]) > Math.abs(nums[endIndex])) {
      result[i] = nums[startIndex] * nums[startIndex];
      startIndex++;
    } else {
      result[i] = nums[endIndex] * nums[endIndex];
      endIndex--;
    }
  }
  return result;
};

console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
