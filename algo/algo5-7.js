/* 
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Create a function that uses yesterday’s partition to fully sort an array
  in-place.
  Unstable sort.
  
  Time Complexity
    - Best: O(n log(n)) linearithmic.
    - Average: O(n log(n)) linearithmic.
    - Worst: O(n^2) quadratic.
  
  Space: O(1) constant.
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the
      last idx.
  - later these params will be used to specify a sub section of the array to
      partition.
  Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/

function partition(nums, left = 0, right = nums.length - 1) {
    const midIdx = Math.floor((left + right) / 2);
    const pivotVal = nums[midIdx];
    let leftIdx = left;
    let rightIdx = right;
  
    while (true) {
      while (nums[leftIdx] < pivotVal) {
        leftIdx += 1;
      }
  
      while (nums[rightIdx] > pivotVal) {
        rightIdx -= 1;
      }
  
      if (leftIdx >= rightIdx) {
        return rightIdx;
      }
  
      [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
      leftIdx += 1;
      rightIdx -= 1;
    }
  }

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 6, 7, 8, 11, 14];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if(left < right){
        let pivotIndex = partition(nums, left, right)
        quickSort(nums, left, pivotIndex) //recursion
        quickSort(nums, pivotIndex + 1, right) //recursion
    }
    return nums 
}

console.log(quickSort(nums1))
console.log(quickSort(nums2))
console.log(quickSort(nums3))

//repeatedly splitting array in half to sort