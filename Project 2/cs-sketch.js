// cs-sketch.js; P5 key animation functions, uses rule 150 to determine whether a box should be filled white or not
// Authors: Kevin Paralta, Jason Jose
// Contact: kevinaperalta@csu.fullerton.edu OR jasonsisonjose@csu.fullerton.edu

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:70, hgt:100 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

// TODO: Setup should create 3 columns, where each column represents each sorting Algorithm
// TODO: each colum is 12 cells wide and 40+ rows high
// TODO: Each cell is 20x20 pixels wide at least
function setup() // P5 Setup Fcn
{
    frameRate(1000);
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 10, 50, 'black', 'white' );
    initial_row();
}

var g_bot = { x:0, y:1, color:100 }; // Dir is 0..7 clock, w 0 up.
var g_box = { t:1, hgt:g_canvas.hgt + 1, l:1, wid:g_canvas.wid + 1}; // Box in which bot can move.

// TODO: Set the first row to have the same input for each column
function initial_row()
{
  stroke('white');
  fill('white');
  let sz = g_canvas.cell_size;
  let half = Math.floor(g_canvas.wid / 2);
  for(var x = 0; x < g_canvas.wid; x++)
  {
    if(x == half)
      rect(half*sz, 0, sz, sz);
  }
}
// Input is going to be a 12-character hexadecimal string
// testing case
let input = "FD8A15934785"

// TODO: Sorting Algorithms Implementation
// Each of these sorting Algorithms should do one-pass at a time

// TODO: Gold Pore's Sort
// TODO: Make sure algorithm works then work on displaying it via html
function poreSort (input) {

}

// TODO: Merge Sorting
// TODO: Make sure algorithm works then work on displaying it via html
function mergeSort (input) {

}

// TODO: Quicksort
// TODO: Make sure algorithm works then work on displaying it via html
function quickSort (input) {
  // Set the first element to be the pivot
  pivotIndex = 0;
  storeIndex = pivotIndex + 1;
  for (int i = pivotIndex; i < input.length(); i++) {

  }
}

// TODO: Start Race is moving each sorting algorithm one pass at a time
function startRace(input) {
  quickSort(input);
  poreSort(input);
  mergeSort(input);
}




// moves the bot one box to the right
function move_bot()
{
    let dx = 1;

    let x = (dx + g_bot.x + g_box.wid) % g_box.wid; // Move-x.  Ensure positive b4 mod.
    let color =  0; // Incr color in nice range.
    g_bot.x = x; // Update bot x.
}


function draw_bot( ) // Convert bot pox to grid pos & draw bot.
{
    check();  //check the cell if it needs to be filled in black or white
    let sz = g_canvas.cell_size;
    let x = g_bot.x*sz; // Set x one pixel inside the sz-by-sz cell.
    let y = g_bot.y*sz;
    rect(x, y, sz, sz );
}

//moves the bot to the next row
function next_row()
{
  if(g_bot.y <= g_canvas.hgt)
    g_bot.y+=1;
  else noLoop()
}

function draw_update()  // Update our display.
{
    // if the bot reaches the end move to the next row
  if(g_bot.x / g_canvas.wid == 1)
  {
    next_row();
  }
  draw_bot( );
  move_bot( );
}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    draw_update();
}
