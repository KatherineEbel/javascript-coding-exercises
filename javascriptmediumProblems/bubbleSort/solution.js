/*
* Bubble sort
*
* make multiple passes (iterations) through an array
* on each pass, the two values of each pair of consecutive
* elements are swapped.
*
* Repeat until a complete pass is made without performing any swaps
* This means array is sorted.
*
* Input: Array
* Output: mutated Array
*
* Rules:
* Sort array in place
* elements are swapped if first value > second value
* array is sorted if iterating through entire array no swaps
* Data Structure and algorithm
* use nested some to break out of iteration as soon as array sorted
* need to track whether swap made on each pass
* to know when complete
*
*
* Repeat:
* starting at index 0 iterate through array if element at current element is > element at next index
*   - make swap (how to make swap?)
*     - [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
* if entire iteration completes without making any swaps array is sorted
* inner loop slice
* */

function bubbleSort(array) {
  array.some(() => {
    let swapped = false;
    let n = -1;
    array.slice(0, n).forEach((el, idx) => {
      if (el < array[idx + 1]) {
        // eslint-disable-next-line no-param-reassign
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swapped = true;
      }
      n -= 1;
    });
    return !swapped;
  });
  return array;
}

module.exports = bubbleSort;
