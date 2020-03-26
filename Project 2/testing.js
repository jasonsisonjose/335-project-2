letters = {
  'A':10,
  'B':11,
  'C':12,
  'D':13,
  'E':14,
  'F':15,
}


testString = "A31452"

for (let i = 0; i < testString.length; i++) {
  // If its a number, convert from string to int
  try {
      let count = parseInt(testString[i])
  }
  // else, it if its a letter A-F, use the dictionary to find the right number
  catch {
    let count = letters[testString[i]];
  }

  let count = testString[i]
  console.log(typeof count, count)
}


testArray = [3,1,4,5,2]
sortedArray = quickSort(testArray, 0, testArray.length)
console.log(sortedArray)


// For each unsorted partition
function partition(array, low, high) {

  console.log(low)
  console.log(high)
  // Set pivot element by default to the first element
  // pivot = array[low], as low represents the beginning  of the array we are sorting
  unsortedBegin = low + 1
  console.log(unsortedBegin)
  // This represents one pass of the sorting
  for (let iterator = low + 1; iterator < high; iterator++) {
    if (array[iterator] < array[low]) {
      console.log(array[iterator])
      // Swap the unsortedBegin and iterator
      let temp = array[iterator]
      console.log(temp)
      array[iterator] = array[unsortedBegin];
      console.log (array[iterator])
      array[unsortedBegin] = temp;
      console.log(array[unsortedBegin])

      unsortedBegin += 1;
      console.log(unsortedBegin)
      console.log(array)
    }
  }
  // Now that we done our first pass, this means that the storedIndex - 1 (last sorted element)
  // must be switched with our pivot index so that the elements left of the pivot have lesser values and
  // element right of the pivot have greater values
  let temp = array[low];
  array[low] = array[unsortedBegin-1];
  array[unsortedBegin - 1] = temp;
  console.log(array)

  let sortedPivotIndex = unsortedBegin - 1;
  return sortedPivotIndex;
}

function quickSort(array, low, high) {
  // this condition makes sure that the array has at least one element,
  // we don't need to sort one element arrays, because they are already sorted
  if (low < high - 1) {
    console.log(low, high)
    let partitionIndex = partition(array, low,high);
    console.log(low, partitionIndex - 1)
    //left side of partition
    quickSort(array, low, partitionIndex);

    //right side of partition
    quickSort(array, partitionIndex+1, high);
    return array;
  }

}
