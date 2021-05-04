const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const { performance } = require('perf_hooks');
const start = performance.now();

// console.log(story.split("").reverse().join(""));
// console.log(`This took ${performance.now() - start} milliseconds to run`);

function efficientSwap(story){
    let stopVal = story.length
    let swapStory = ""
    for(let i = stopVal-1; i>=0; i--){
        swapStory+=story[i]
    }
    return swapStory
}
console.log(efficientSwap(story))
console.log(`This took ${performance.now() - start} milliseconds to run`);

//I dunno why this isnt faster?