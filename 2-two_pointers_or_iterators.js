// Two pointers iterate through a DS at the
// same time until a condition is met.
// It's an alternative to looping a structure twice.
// Useful searching for pairs in sorted array.
// Use this over sliding-window pattern for non-contiguous searching

// How to identify a two pointer problem:
// - Sorted array or linked list
// - Need to find elements fit certain conditions
// - Set we need to find is a pair/triplet/subarray

// Example problems:
// - Squaring a sorted array
// - Triplets that sum to 0
// - Comparing strings that contain backspaces


// Leetcode problem #11 (Medium)
// Container With Most Water

// let i represent the current line where i starts at 1
// to calculate the area we do W * H
// we need to use the smaller height
// when calculating H
// [1,8,6,2,5,4,8,3,7]
// [1,8], [1,8,6], [1,8,6,2], [1,8,6,2,5]...
// [8,6], [8,6,2], [8,6,2,5]...
// [6,2], [6,2,5]...

// My first brute-force solution which is O(n^2)
var maxArea1 = function (height) {
  // loop through every value and calculate the area
  // to calculate width, it is the right-most index starting minus 1 
  // minus the left-most index
  // height is equal to the smaller number you are comparing
  let maxArea = 0;
  for (let hx = 0; hx < height.length; hx++) {
    for (let hy = hx + 1; hy < height.length; hy++) {
      let cHeight = Math.min(height[hy], height[hx]);
      let cWidth = hy - hx;
      let area = cHeight * cWidth;
      maxArea = Math.max(area, maxArea);
    }
  }
  return max;
};

// let data = maxArea1([1, 1]);
// console.log(data);

// With the two-pointer pattern: 
var maxArea2 = function (height) {
  // Two pointers going in either direction
  // Unsorted array
  let rightPointer = height.length - 1;
  let leftPointer = 0;
  let maxArea = 0;
  while (rightPointer > leftPointer) {
    // Calculate the width
    let cWidth = rightPointer - leftPointer;
    // Calculate the Min height
    let leftHeight = height[leftPointer];
    let rightHeight = height[rightPointer];
    let cHeight = Math.min(height[leftPointer], height[rightPointer]);
    // Calculate the area
    let area = cWidth * cHeight;
    // Update maxArea
    maxArea = Math.max(maxArea, area);
    // Increment or decrement our pointer
    if (leftHeight <= rightHeight) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return maxArea
}

let data = maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(data);