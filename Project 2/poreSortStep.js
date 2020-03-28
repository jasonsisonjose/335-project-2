
var poreObj = {input:{}, swapped:true, n:0};

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
      if(pObj.input[i] > pObj.input[i + 1])
      {
        swap(pObj.input, left, right);
        pObj.swapped = true;
        console.log(pObj.input);
      }
    }
    pObj.n++;
  }
}

