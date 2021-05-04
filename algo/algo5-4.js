const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function insertionSort(arr){
    for(let i = 1; i<arr.length ;i++){
        let insertionVal = arr[i];
        for(let j = i-1; j >= 0; j--){ //this should have been a 2 condition while loops
            if (arr[j] > insertionVal || j === 0){
                arr[j] = insertionVal;
                break;
            }else{
                arr[j]=arr[j-1];
            }
        }
    }
    return arr
}

console.log(insertionSort(numsRandomOrder))
console.log(insertionSort(numsReversed))


//for loop to iterate through the entire array
//variable to store moving card
//while loop continues until smaller value found
//return result