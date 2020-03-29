// poreSortStep --> how to implement the pore sorting
// Authors: Kevin Paralta, Jason Jose
// Contact: kevinaperalta@csu.fullerton.edu OR jasonsisonjose@csu.fullerton.edu
var poreObj = {input:{}, swapped:true, n:0};

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

function psSetup(array) {
  poreObj.input = array;
}

function swap (items, left, right)
{
  var temp = items[left];
  items[left] = items[right];
  items[right] = temp;
}

function poreSortStep(pObj)
{
  // pObj.input = convertToArray(pObj.input)
  if(pObj.swapped)
  {
    pObj.swapped = false;
    var start = (pObj.n % 2 == 0 ? 0 : 1);
    for(var i = start; i + 1 < pObj.input.length; i += 2)
    {
      let left = i,
          right = i + 1;
      if(numberCheck(pObj.input[i]) > numberCheck(pObj.input[i + 1]))
      {
        swap(pObj.input, left, right);
        pObj.swapped = true;
        //console.log(poreObj.input);
      }
    }
    psSetup(pObj.input);
    pObj.n++;
  }
  pObj.input = pObj.input.join('')
  return pObj;
}

let pObj = {input:{}, swapped:true, n:0};
pObj.input = [3,1,4,5,2];
let testingObj = poreSortStep(pObj);
console.log("testing obj:",testingObj);

console.log(testingObj['input'])


// while(poreObj.swapped) {
//   let test = poreSortStep(poreObj);
//   console.log(test.input);
// }
