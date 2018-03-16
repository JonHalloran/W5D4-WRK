function range(start, end) {
  if (start === end) {
    return [start];
  }
  let arr = range(start + 1, end);
  arr.unshift(start);
  return arr;
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.shift() + sumRec(arr);
}
//
// function exponent(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   return base * exponent(base, exp - 1);
// }

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp % 2 === 0) {
    let prev = exponent(base, exp / 2);
    return prev * prev;
  } else {
    let prev = exponent(base, (exp - 1)/ 2);
    return base * (prev * prev);
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    let prev = fibonacci(n - 1);
    let next = prev[n - 2] + prev[n - 3];
    prev.push(next);
    return prev;
  }
}


function myFlatten(arr) {
  if (arr.length === 0) {
    return arr;
  }
  let duped = [];
  arr.forEach((el) => {
    if (el instanceof Array) {
      duped = duped.concat(myFlatten(el));
    } else {
      duped.push(el);
    }
  });
  return duped;
}

function deepDup(arr) {
  if (arr.length === 0) {
    return arr;
  }
  let duped = [];
  arr.forEach((el) => {
    if (el instanceof Array) {
      duped.push(deepDup(el));
    } else {
      duped.push(el);
    }
  });
  return duped;
}

function bsearch(arr, target) {
  console.log(arr);
  if (arr.length <= 1) {
    if (arr.length === 1 && arr[0] === target){
      return 0;
    }
    return - 1;
  }

  let midIndex = Math.floor(arr.length/2);
  let mid = arr[midIndex];
  console.log(mid);
  console.log(target);
  if (mid === target) {

    return midIndex;
  } else if (target < mid) {

    return bsearch (arr.slice(0, midIndex), target);
  } else {
    let idx = bsearch(arr.slice(midIndex + 1), target);
    if (idx === -1){

      return -1;
    }else {

      return idx + midIndex + 1;
    }
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let midIndex = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, midIndex));
  let right = mergeSort(arr.slice(midIndex));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] >= arr2[0]) {
      result.push(arr2.shift());
    } else {
      result.push(arr1.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
}



function subSets(arr) {
  console.log(arr);
  if (arr.length === 0) {
    return [[]];
  }
  let lastEl = arr[arr.length - 1];
  let prev = subSets(arr.slice(0, arr.length-1));
  let map = prev.map((el) => {
    return el.concat(lastEl);
  });
  return prev.concat(map);
}
