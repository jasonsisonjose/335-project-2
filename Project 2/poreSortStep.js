// poreSortStep --> how to implement the pore sorting
// Authors: Kevin Paralta, Jason Jose
// Contact: kevinaperalta@csu.fullerton.edu OR jasonsisonjose@csu.fullerton.edu
var poreObj = {input:{}, swapped:true, n:0};

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
  return pObj;
}

poreObj.input = [3,1,4,5,2];
poreSortStep(poreObj);


// psSetup([3,1,4,5,2]);
// while(poreObj.swapped) {
//   let test = poreSortStep(poreObj);
//   console.log(poreObj.input);
// }
