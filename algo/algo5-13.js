// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
  const sumsArray = [];
  for (let i = 0; i < nums.length; i++) {
    let rangeSum = nums[i];
    let sliceCounter = i + 1;
    while (Math.abs(rangeSum) <= Math.abs(targetSum)) {
      rangeSum += nums[sliceCounter];
      if (rangeSum === targetSum) {
        sumsArray.push(nums.slice(i, sliceCounter + 1));
      }
      sliceCounter++;
    }
  }
  return sumsArray;
}

console.log(findConsqSums(nums1, sum1));
console.log(findConsqSums(nums2, sum2));
console.log(findConsqSums(nums3, sum3));

//create new array to hold number sequences
//iterate through array
//create sum var
// for each index, while loop and iterate through remaining array until sum is either equal to or greater than input
// if equal to, splice string out and push to new array.
//if greater than, continue for loop iteration
//return array

/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
  const nonConsArray = [];
  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] - 1 != sortedNums[i - 1]) {
      nonConsArray.push({ i: i, n: sortedNums[i] });
    }
  }
  return nonConsArray;
}

console.log(allNonConsecutive(nums1));

//create array to store objects
//iterate through array, if arr-1 is not val-1, push an object containing both index and value
//return array
