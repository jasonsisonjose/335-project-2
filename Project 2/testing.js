letters = {
  'A':10,
  'B':11,
  'C':12,
  'D':13,
  'E':14,
  'F':15,
}

testString = "A9543216";

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

function convertToArray(string) {
  let numberArray = [];
  for (let i = 0; i < string.length; i++) {
    numberArray[i] = numberCheck(string[i]);
  }
  console.log(numberArray)
  return numberArray;
}

// For each unsorted partition
function partition(dataBag) {
  // Set pivot element by default to the first element
  // pivotTest = array[low], as low represents the beginning  of the array we are sorting
  // We are also checking if the pivot happens to be a letter, if so we need to assign the proper number value
  let pivotTest = numberCheck(dataBag['array'][dataBag['low']])
  console.log(dataBag['low'])
  console.log(dataBag['high'])
  // Because we are setting the pivot element as the first element, we want to start checking
  // the pivot element + 1 which is represented by the begininng of the unsorted array = unsortedBegin
  unsortedBegin = dataBag["low"] + 1
  console.log(unsortedBegin)
  // This represents one pass of the sorting
  for (let iterator = dataBag["low"] + 1; iterator < dataBag["high"]; iterator++) {
    let iteratorTest = numberCheck(dataBag['array'][iterator])

    if (iteratorTest < pivotTest) {
      // Swap the unsortedBegin and iterator
      let temp = iteratorTest;
      dataBag['array'][iterator] = dataBag['array'][unsortedBegin];
      dataBag['array'][unsortedBegin] = temp;

      unsortedBegin += 1;
    }
  }
  // Now that we done our first pass, this means that the unsortedBegin - 1 (last sorted element)
  // must be switched with our pivot index so that the elements left of the pivot have lesser values and
  // element right of the pivot have greater values
  let temp = pivotTest;
  dataBag['array'][dataBag['low']] = dataBag['array'][unsortedBegin-1];
  dataBag['array'][unsortedBegin - 1] = temp;

  dataBag['sortedPivotIndex'] = unsortedBegin - 1;
  return dataBag;
}


// ARRAY CASE
// quickSort defines the area that needs to be sorted
// partition does the sorting, and edits the array
function quickSort(dataBag) {
  // normal quicksorting function
  // this condition makes sure that the array has at least one element,
  // we don't need to sort one element arrays, because they are already sorted
  // if (low < high - 1) {
  //   //divides the array into two partitions to be sorted
  //   let partitionIndex = partition(array, low, high);
  //   //left side of partition
  //   quickSort(array, low, partitionIndex);
  //
  //   //right side of partition
  //   quickSort(array, partitionIndex+1, high);
  //   return array;
  // }
  // else {
  //  return
  // }
  //

  // initial partition
  if (dataBag["next_segment_step"] == "partition") {
    // Partition edits the array contents and the partitionIndex
    let editedBag = partition(dataBag);
    //set data to prepare for sortLeft
    editedBag["high"] = editedBag["sortedPivotIndex"]
    editedBag["next_segment_step"] = "sortLeft";
    return editedBag;
  }

  // If its in the left subarray, it can either go left or right
  else if(dataBag["next_segment_step"] == "sortLeft") {
    let editedBag = partition(dataBag)
    console.log(editedBag['low'])
    console.log(editedBag['high'])
    console.log(editedBag['sortedPivotIndex'])
    console.log(editedBag['array'])
    // How to decide if to go left or right or finish
    // If we are at the right edge of the array, go left
    if((editedBag['low'] + 1) == editedBag['high']) {
      editedBag['doneStatus'] = true;
    }
    // try going Left
    else if((editedBag['triedLeft']) == false) {
      editedBag["high"] = editedBag["sortedPivotIndex"]
      editedBag["next_segment_step"] = "sortLeft";
      editedBag['triedLeft'] = true;
    }
    // try going right
    else if ((editedBag['triedRight'] == false)) {
      editedBag["low"] = (editedBag["sortedPivotIndex"] + 1)
      editedBag["next_segment_step"] = "sortRight";
      editedBag["next_segment_step"] = true;
    }
    console.log(editedBag["doneStatus"])
    return editedBag;
  }
  // If its in the right subarray, it can also either go left or right
  else if(dataBag["next_segment_step"] == "sortRight"){
    let editedBag = partition(dataBag);
    if((editedBag['low'] + 1) == editedBag['high']) {
      editedBag['doneStatus'] = true;
    }
    // try going Left
    else if((editedBag['triedLeft']) == false) {
      editedBag["high"] = editedBag["sortedPivotIndex"]
      editedBag["next_segment_step"] = "sortLeft";
      editedBag['triedLeft'] = true;
    }
    // try going right
    else if ((editedBag['triedRight'] == false)) {
      editedBag["low"] = (editedBag["sortedPivotIndex"] + 1)
      editedBag["next_segment_step"] = "sortRight";
      editedBag['triedRight'] = true;
    }
    else if((editedBag['triedRight'] == true) && (editedBag['triedLeft']) == true) {
      editedBag['doneStatus'] = true;
    }
    console.log(editedBag['doneStatus'])
    return editedBag;
  }
}

function createBag () {
  let sortingData = {
    'array' : [],
    'low' : 0,
    'high' : 0,
    'sortedPivotIndex': 0,
    'next_segment_step' : "partition",
    'doneStatus' : false,
    'triedLeft': false,
    'triedRight': false
  }
  return sortingData;
}



function getQuickSortStep() {
  // Use Top data in the stack, the top will represent the most recent step
  let topBag = callerStack[callerStack.length - 1]


  let nextBag = quickSort(topBag);
  console.log(nextBag['doneStatus'])
  if (nextBag['doneStatus'] == true) {
    callerStack.pop()
  }
  else {
    callerStack.push(nextBag);
  }
}

function getQuickSortStepHelper (string) {
  let tempData = createBag()
  tempData["array"] = convertToArray(string);
  tempData["low"] = 0;
  tempData["high"] = string.length;

  callerStack.push(tempData);
}


// TESTING CODE AREA

let callerStack = [];
let sortingStack = [];
let counter = 0;
getQuickSortStepHelper(testString);
//sortingStack[sortingStack.length - 1]['doneStatus'] == false
while (callerStack.length != 0) {

  getQuickSortStep()
  console.log(callerStack[callerStack.length - 1]['array'])

  counter += 1
  console.log(counter)
}
