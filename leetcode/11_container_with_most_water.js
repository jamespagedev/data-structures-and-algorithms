/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
In this case, the max area of water (blue section) the container can contain is 49.

Formula:
Ending Height = 7(arr[last])
between elements 8 and 7, number of indexes(including last element index) = 7
7 * 7 = 49

Example 2:
Input: height = [1,1]
Output: 1

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

var maxArea = function (height) {
  let leftHeightI = 0;
  let rightHeightI = height.length - 1;
  let maxArea = 0;

  while (leftHeightI < rightHeightI) {
    const tempArea =
      Math.min(height[leftHeightI], height[rightHeightI]) *
      (rightHeightI - leftHeightI);
    if (tempArea >= maxArea) {
      maxArea = tempArea;
    }
    if (height[leftHeightI] > height[rightHeightI]) {
      rightHeightI--;
    } else {
      leftHeightI++;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([1, 2])); // 1
console.log(maxArea([2, 0])); // 0
console.log(maxArea([1, 2, 4, 3])); // 4
console.log(maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2])); // 8
