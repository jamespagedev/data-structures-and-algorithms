/*
Given an integer array nums, return all the triplets [nums[i], nums[j],
nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/*
Cases:
nums = [-4, -4, 1, 2, 2, 3]
first =      1
second =              2
third =            3

nums = [-4, -1, -1, -1, -1, 0, 1, 2, 2]
first =      1
second =         2
third =                              3

nums = [-2, -1, 0, 1, 2, 3]
first =      1
second =        2
third =            3
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

var threeSum = function (nums) {
  // don't sort if nums only has 3 numbers
  if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) {
    return [[nums[0], nums[1], nums[2]]];
  }

  const numsSorted = quickSort(nums);
  if (numsSorted[0] > 0 || numsSorted[numsSorted.length - 1] < 0) return [];

  const result = [];
  let first = 0;
  let second = 1;
  let third = numsSorted.length - 1;
  const firstNumsWithCombinations = new Set();

  while (first <= numsSorted.length - 3 && numsSorted[first] < 1) {
    if (second >= third) {
      first++;
      while (
        firstNumsWithCombinations.has(numsSorted[first]) &&
        first <= numsSorted.length - 3
      ) {
        first++;
      }
      second = first + 1;
      third = nums.length - 1;
      continue;
    }
    if (numsSorted[first] + numsSorted[second] + numsSorted[third] === 0) {
      result.push([numsSorted[first], numsSorted[second], numsSorted[third]]);
      if (!firstNumsWithCombinations.has(numsSorted[first])) {
        firstNumsWithCombinations.add(numsSorted[first]);
      }
      second++;
      third--;
      while (
        numsSorted[second] === numsSorted[second - 1] &&
        second < numsSorted.length - 2
      ) {
        second++;
      }
      while (
        numsSorted[third] === numsSorted[third + 1] &&
        third < numsSorted.length - 1
      ) {
        third--;
      }
    } else if (
      numsSorted[second] + numsSorted[third] >
      Math.abs(numsSorted[first])
    ) {
      third--;
    } else {
      second++;
    }
  }

  return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2], [-1,0,1]]
// console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
console.log(threeSum([3, 0, -2, -1, 1, 2])); // [[-2,-1,3],[-2,0,2],[-1,0,1]]
