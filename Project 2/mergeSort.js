class mergeObj
{
  constructor(p, ar, mid, left, right)
  {
    this.p = p;
    this.ar = ar;
    this.mid = mid;
    this.left = left;
    this.right = right;
  }
};

function mergeSort (input)
{
//seg #1
console.log(input);
  var larr,rarr;
  if (input.length < 2)
    return input;

  var mid = Math.floor(input.length/2),
      left = input.slice(0,mid),
      right = input.slice(mid, input.length);
//seg #3
  return merge(mergeSort(left), mergeSort(right));
}

function mergeHelp(ar)
{
  var p = 0,
      input = ar,
      mid = Math.floor(ar.length/2),
      left = input.slice(0,mid),
      right = input.slice(mid);
  mergeStack.push(new mergeObj(p, input, mid, left, right));
}

function mergeStep(mergeObj)
{
  var obj = mergeStack[mergeStack.length - 1];
  var ar = obj.ar;
  if(obj.p == 0)
  {
    //base step
    if(ar.length < 2)
    {
      mergeStack.pop();
      mergeStack[mergeStack.length - 1].p += 1;
      return ar;
    }

    mergeHelp(obj.left);
    console.log(obj.ar);
    mergeStep(mergeStack[mergeStack.length - 1]);
  }
  else if(obj.p == 1)
  {
    mergeHelp(obj.right);
    mergeStep(mergeStack[mergeStack.length -1]);
  }
  else
  {
    mergeStack.pop();
    if(mergeStack.length != 0)
    {
      mergeStack[mergeStack.length - 1].p += 1;
      if(mergeStack[mergeStack.length - 1].p == 2)
      {
        mergeStack[mergeStack.length - 1].right = merge(obj.left,obj.right);
      }
      else
      {
        mergeStack[mergeStack.length - 1].left = merge(obj.left, obj.right);
      }
    }
    else
    {
      return merge(obj.left, obj.right);
    }
  }
}

function merge(left, right)
{
  var result = [],
      llen = left.length,
      rlen = right.length,
      l = 0,
      r = 0;
  while(l < llen && r < rlen)
  {
    if (left[l] < right[r])
    {
      result.push(left[l]);
      l++;
    }
    else
    {
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}
