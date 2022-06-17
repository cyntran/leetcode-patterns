// Sliding Window: 
// Slides a window through a continguous
// data structure creating a subset of values

// How to identify a sliding window pattern:
// 1. Linked list, array, string (linear DS)
// 2. Find a substring of certain quality
// 3. Analyzing portion of linear data structure of a certain size

// Example problems:
// 1. Max sum of subarray size 'K'
// 2. Longest substring with 'K' distinct characters
// 3. String anagrams

// Leetcode problem #1343 (Medium)
// Number of Subarrays of Size K and Average Greater than or Equal to Threshold

let arr = [2, 2, 2, 2, 5, 5, 5, 8];
let k = 3;
let threshold = 4;

// This is my naive O(n^2) approach:
var numOfSubarrays_1 = function (arr, k, threshold) {
  // [0: 2] < 3
  // [3: 5] < 6
  // [6: 8] < 9

  // avg ([0:2],[1:3],[2:4],[3:5],[4:6],[5,7])
  // starting index i, incremented by 1
  // ending index will be our starting value incremented by k
  let counter = 0;
  for (i = 0; i + k - 1 < arr.length; i++) {
    let sum = 0;
    for (j = i; j < i + k; j++) {
      sum += arr[j];
    }
    let avg = sum / k;
    if (avg >= threshold) {
      counter++;
    }
  }
  return counter;
}

// let numOfSets = numOfSubarrays_1(arr, k, threshold);

// expected output 3
// console.log(numOfSets)

// This is the sliding window approach O(n):
var numOfSubarrays_2 = function (arr, k, threshold) {
  // Calculate the average of the first k elements
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let firstAvg = sum / k;
  if (firstAvg >= threshold) {
    counter++;
  }

  // Calculate the average of the rest of the array
  for (let j = k; j < arr.length; j++) {
    // Slide the window up by subtracting the first element of the array from the sum
    sum -= arr[j - k];
    // And then we add the next element to our sum as we slide
    sum += arr[j];
    let avg = sum / k;

    if (avg >= threshold) {
      counter++;
    }
  }

  return counter;
}

let numOfSets = numOfSubarrays_2(arr, k, threshold);

// expected output 3
console.log(numOfSets)