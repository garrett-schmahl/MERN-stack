/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(nums = [], right = nums.length - 1){
    let center = Math.floor(right/2)
    for(let i=center;i<nums.length;i++){ //find a value smaller than center to the right of center
        if(nums[i] < nums[center]){
            for(let j=center;j>=0;j--){
                if(nums[j]>nums[center]){ //find a larger than center value to the left of center to swap
                    [nums[j],nums[i]]=[nums[i],nums[j]]
                } else if(j === 0){ //if the counter reaches the end of the loop without finding smaller
                    let shiftVal = nums[i]
                    for(let k=i-1;k>0;k--){ //if we reach the start without finding a larger than center value, bump the array to make space, starting from our smaller value
                        nums[k+1] = nums[k]
                    }
                    nums[0] = shiftVal
                }
            }
        }
    }
    //all values smaller than center should now be on the left, we need to shift them all left until no larger than center numbers remain on the left.
    for(let i=0;i<center;i++){
        if(nums[i]>nums[center]){
            let shiftVal = nums[i]
            for(let j=center-1;j>0;j--){
                nums[j+1] = nums[j]
            }
            nums[center] = shiftVal
            center--
        }
    }
    return nums
}

console.log(partition(nums1))
console.log(partition(nums2))
console.log(partition(nums3))


//[val1,val2]=[val2,val1]


//find center
//push left until it finds smaller
//travel right, look for smaller, if found, travel left, look for larger. If 0 index is reached, bump array right starting from smaller's index, and place smaller at index 0