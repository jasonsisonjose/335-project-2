// cs-sketch.js; P5 key animation functions, uses merge sort, quick sort, and pore sort and displays them to see which algorithm can finish them the quickest.
// Authors: Kevin Paralta, Jason Jose
// Contact: kevinaperalta@csu.fullerton.edu OR jasonsisonjose@csu.fullerton.edu

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:20, wid:38, hgt:100 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

let firstColumn = g_canvas.cell_size * 12;
let secondColumn = g_canvas.cell_size * 25;

// Define Required Testing Input as an array holding arrays
let testingInput = [
  [0, 5, 'A', 6, 2, 7, 'B', 2, 'B', 6, 0, 3],
  [0, 6, 5, 6, 6, 7, 1, 0, 4, 0, 'B', 'A'],
  [0, 6, 5, 6, 6, 7, 1, 0, 4, 0, 'B', 'A'],
  [0, 7, 9, 'A', 2, 1, 8, 3, 4, 'B', 6, 5],
  [0, 9, 4, 8, 7, 8, 6, 2, 2, 6, 1, 6],
  [1, 'A', 'B', 3, 4, 7, 9, 0, 5, 2, 8, 6],
  [2, 8, 6, 1, 0, 3, 4, 2, 7, 8, 5, 9],
  [3, 0, 5, 3, 0, 4, 7, 8, 6, 'A', 2, 1],
  [3, 2, 8, 4, 7, 6, 5, 1, 0, 'B', 'A', 9],
  [3, 4, 2, 7, 5, 6, 1, 8, 9, 0, 'B', 'A'],
  [4, 1, 'B', 3, 8, 2, 6, 2, 1, 9, 8, 5],
  [4, 6, 3, 7, 9, 0, 1, 5, 'B', 8, 'A', 2],
  [5, 3, 5, 1, 'A', 3, 3, 'A', 9, 9, 'B', 'B'],
  [5, 9, 3, 4, 7, 9, 0, 8, 8, 'A', 1, 5],
  [5, 9, 'A', 2, 2, 'A', 4, 4, 'A', 3, 9, 4],
  [7, 1, 9, 2, 0, 6, 8, 'B', 3, 4, 5, 'A'],
  [7, 2, 'B', 3, 'A', 5, 4, 1, 6, 9, 8, 0],
  [8, 1, 'A', 3, 9, 2, 0, 1, 0, 'A', 9, 1],
  [8, 9, 4, 0, 'A', 5, 2, 'B', 1, 6, 3, 7],
  ['A', 6, 9, 3, 5, 4, 2, 'B', 7, 0, 1, 8],
  ['A', 9, 4, 2, 5, 'B', 1, 6, 8, 7, 3, 0],
  ['A', 'A', 0, 2, 3, 'B', 7, 2, 3, 5, 6, 4],
  ['B', 4, 0, 1, 6, 3, 8, 'A', 2, 9, 7, 5],
  ['B', 5, 8, 6, 1, 7, 9, 2, 'A', 4, 0, 3]
]



// Quick Sort Data Requirements
let quickSortRow = 2;
let mergeSortRow = 2;
let poreSortRow = 2;

// DONE: Setup should create 3 columns, where each column represents each sorting Algorithm
// DONE: each column is 12 cells wide and 40+ rows high
// DONE: Each cell is 20x20 pixels wide at least
function setup() // P5 Setup Fcn
{
    frameRate(1000);
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas(width, height);  // Make a P5 canvas.
    draw_structure();
}
// Responsible for creating the columns and labeling them
function draw_structure () {
  fill('black');
  // Creating the columns
  rect(firstColumn, 0, g_canvas.cell_size, height)
  rect(secondColumn, 0, g_canvas.cell_size, height)

  // Labeling the 3 columns
  noStroke()
  textSize(20)
  text('Quick Sort', 80, 20)

  noStroke()
  textSize(20)
  text('Merge Sort', 340, 20)

  noStroke()
  textSize(20)
  text('Pore Sort', 600, 20)

}

// Update Quick sort function, adds the new array from the quick sort pass
function updateQuickSort(array) {
  let y_position = g_canvas.cell_size * quickSortRow;
  let x_position = 0;
  console.log(array)
  for(let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    console.log(array[arrayIndex])
    stroke('orange')
    fill('white')
    rect(x_position, y_position, g_canvas.cell_size,g_canvas.cell_size)

    noStroke();
    fill('black')
    text(`${array[arrayIndex]}`, x_position + 5, y_position + 17)
    x_position += g_canvas.cell_size;
  }
  quickSortRow += 1;
}
// Update Merge sort function, adds the new array from the merge sort pass
function updateMergeSort (array) {
  let y_position = g_canvas.cell_size * mergeSortRow;
  let x_position = 0;
  console.log(array)
  for(let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    console.log(array[arrayIndex])
    stroke('orange')
    fill('white')
    rect(x_position, y_position, g_canvas.cell_size,g_canvas.cell_size)

    noStroke();
    fill('black')
    text(`${array[arrayIndex]}`, x_position + 5, y_position + 17)
    x_position += g_canvas.cell_size;
  }
  quickSortRow += 1;
}
// Update pore sort function, adds the new array from the merge sort pass
function updatePoreSort (array) {
  let y_position = g_canvas.cell_size * poreSortRow;
  let x_position = 0;
  console.log(array)
  for(let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    console.log(array[arrayIndex])
    stroke('orange')
    fill('white')
    rect(x_position, y_position, g_canvas.cell_size,g_canvas.cell_size)

    noStroke();
    fill('black')
    text(`${array[arrayIndex]}`, x_position + 5, y_position + 17)
    x_position += g_canvas.cell_size;
  }
  quickSortRow += 1;
}


// Does one step at a time for each algorithm until they are all done.
function race_manager(testingArray) {
  // QuickSort
  quickSortHelper(testingArray);
  let delayIndex = 0
  while (quickSortStep() != 0) {
    let step = quickSortStep();
    setTimeout(() => {
      updateQuickSort(step);
    },2000 * delayIndex)
    delayIndex += 1;
    quickSortBag['currentIndex'] += 1;
  }

  // Pore Sort
  let poreObj = {input:{}, swapped:true, n:0};
  poreObj.input = testingArray;
  console.log(poreSortStep(poreObj));

}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
  noLoop();
  let testIndex = Math.floor((Math.random() * 24))
  race_manager(testingInput[testIndex])
    // draw_update();
}
