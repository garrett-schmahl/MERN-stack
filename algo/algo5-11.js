/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/
function diagonalDifference(sqrMatrix) {
  let leftToRightSum = 0;
  let rightToLeftSum = 0;
  let arrayLength = squareMatrix.length;
  for (let i = 0; i < arrayLength; i++) {
    leftToRightSum += squareMatrix[i][i];
    rightToLeftSum += squareMatrix[i][arrayLength - i - 1];
  }
  return Math.abs(leftToRightSum - rightToLeftSum);
}

console.log(diagonalDifference(squareMatrix));

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */

/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/
function orderedMultisetUnion(sortedA, sortedB) {
    let aCounter = 0;
    let bCounter = 0;
    let unionArray = [];
    while (sortedA.length+sortedB.length > aCounter+bCounter) {
        if (sortedA[aCounter]> sortedB[bCounter]){
          let indexVal = sortedB[bCounter]
        } else{
          let indexVal = sortedA[aCounter]
        }
        
        for(let i = 0; i < sortedA.length; i++) {

        }
        for(let i = 0; i < sortedB.length; i++){

        }
        if()
        unionArray.push()
    }
    return unionArray
  }
//we need to see which of the two arrays has more of each value.

//2 separate counters, 1 for each array
//counter progress through until a new value is found
//compare the counters and choose the higher
//output that number of the value into a new array
//repeat until both arrays are finished


/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */