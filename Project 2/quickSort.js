// quickSort.js; defines the logic for how implementing quick sort
// Authors: Kevin Paralta, Jason Jose
// Contact: kevinaperalta@csu.fullerton.edu OR jasonsisonjose@csu.fullerton.edu

let quickSortBag = {
  'stack' : [],
  'currentIndex': 1,
  'low' : 0,
  'high': 0,
}


let letters = {
  'A':10,
  'B':11,
  'C':12,
  'D':13,
  'E':14,
  'F':15,
}

// Converts strings to Arrays
function convertToArray(string) {
  let numberArray = [];
  for (let i = 0; i < string.length; i++) {
    // If it's a letter, push it
    if (isNaN(Number(string[i]))) { numberArray.push(string[i]) }
    else { numberArray.push(Number(string[i])) }
  }
  return numberArray;
}


// This is necessary to compare letters to numbers
// ex: 'A' > 5
function numberCheck(testElement) {
  // Test Element is not a number, a letter
  // Return the number associated with letter
  if (isNaN(Number(testElement))) {
    return letters[testElement];
  }
  else {
    // It is a number, continue on.
      return Number(testElement);
  }
}

// For each unsorted partition
function partition(array, low, high) {
  // Set pivot element by default to the first element
  // pivotTest = array[low], as low represents the beginning  of the array we are sorting
  // We are also checking if the pivot happens to be a letter, if so we need to assign the proper number value
  let pivotTest = numberCheck(array[low])

  // Because we are setting the pivot element as the first element, we want to start checking
  // the pivot element + 1 which is represented by the begininng of the unsorted array = unsortedBegin
  unsortedBegin = low + 1

  // This represents one pass of the sorting
  for (let iterator = low + 1; iterator < high; iterator++) {
    let iteratorTest = numberCheck(array[iterator])

    if (iteratorTest < pivotTest) {
      // Swap the unsortedBegin and iterator
      // If they aren't a duplicate of each other
      if (array[iterator] != array[unsortedBegin]) {
        let temp = array[iterator];
        array[iterator] = array[unsortedBegin];
        array[unsortedBegin] = temp;
      }
      unsortedBegin += 1;
    }
  }
  // Now that we done our first pass, this means that the unsortedBegin - 1 (last sorted element)
  // must be switched with our pivot index so that the elements left of the pivot have lesser values and
  // element right of the pivot have greater values
  if (array[low] != array[unsortedBegin - 1]) {
    let temp = array[low];
    array[low] = array[unsortedBegin-1];
    array[unsortedBegin - 1] = temp;
  }

  // We push the pass to a global variable to access later
  quickSortBag['stack'].push(array.join(''))

  let sortedPivotIndex = unsortedBegin - 1;
  return sortedPivotIndex;
}

function quickSort (array, low, high) {

  // this condition makes sure that the array has at least one element,
  // we don't need to sort one element arrays, because they are already sorted
  if (low < (high - 1)) {
    //divides the array into two partitions to be sorted
    let partitionIndex = partition(array,low,high);

    //left side of partition
    quickSort(array, low, partitionIndex);

    //right side of partition
    quickSort(array, partitionIndex + 1, high);
    return array;
  }
  else {
   return;
  }
}


// Helper function that calls the quick sort
function quickSortHelper(array) {
  quickSortBag["array"] = array;
  quickSortBag["high"] = quickSortBag['array'].length;
  quickSort(quickSortBag["array"], quickSortBag["low"], quickSortBag["high"]);
}

// Function used to get each step of the quick sort, returns the array pass
function quickSortStep() {
  let index = quickSortBag['currentIndex']
  let stackLength = quickSortBag['stack'].length

  if (index < stackLength) {
    let sortedStep = convertToArray(quickSortBag['stack'][index])
    return (sortedStep)
  }
  else {
    return 0
  }

}


// quickSortHelper(testingInput[20])
// console.log(quickSortBag['stack'])

// while(quickSortStep() != 0) {
//   console.log(quickSortBag['currentIndex'])
//   console.log(quickSortStep())
//   quickSortBag['currentIndex'] += 1;
// }
