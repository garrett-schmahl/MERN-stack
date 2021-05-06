// const sortedA1 = [];
// const sortedB1 = [];
// const expectedMerge1 = [];

// const sortedA2 = [5];
// const sortedB2 = [2];
// const expectedMerge2 = [2, 5];

// const sortedA3 = [3];
// const sortedB3 = [2, 3, 4, 7];
// const expectedMerge3 = [2, 3, 3, 4, 7];

// const sortedA4 = [1, 2, 4, 5, 6, 9];
// const sortedB4 = [3, 7, 8, 10];
// const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// function merge(arr1,arr2,arr1Index = 0,arr2Index = 0, mergedArray=[]){
//     if(arr1[arr1Index]<arr2[arr2Index]){
//         mergedArray.push(arr1[arr1Index])
//         return merge(arr1,arr2,arr1Index++,arr2Index, mergedArray)
//     } else{
//         mergedArray.push(arr2[arr2Index])
//         return merge(arr1,arr2,arr1Index,arr2Index++, mergedArray)
//     }

// }

const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function merge(arr1,arr2){
    let arr1Counter = 0
    let arr2Counter = 0
    let sortedArray=[]
    while(sortedArray.length < arr1.length+arr2.length){
        if (arr2.length === arr2Counter){
            sortedArray.concat(arr1.slice(arr1Counter))
            break;
        }
        if(arr1.length === arr1Counter){
            sortedArray.concat(arr2.slice(arr2Counter))
            break;
        }
        
        if(arr1[arr1Counter]<arr2[arr2Counter]){
            sortedArray.push(arr1[arr1Counter])
            arr1Counter++
        }else{
            sortedArray.push(arr2[arr2Counter])
            arr2Counter++
            }
        }
    return sortedArray
}

console.log(merge(sortedA1,sortedB1))
console.log(merge(sortedA2,sortedB2))
console.log(merge(sortedA3,sortedB3))
console.log(merge(sortedA4,sortedB4))
