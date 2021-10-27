let tempDepth;
let indexNotArrayCounter = 0;

//this function determine if the array's depth is bigger than 1 or not
function firstLayerOfDepthDetector(arr) {
  for (let index of arr) {
    if (!Array.isArray(index)) indexNotArrayCounter++;
  }
  if (indexNotArrayCounter === arr.length) {
    return `your array depth is 1`;
  }
  tempDepth = 2;
  return plus2DepthFinder(arr);
}

// if the depth was bigger than 2
function plus2DepthFinder(list) {
  let newList = [].concat.apply([], list);
  for (let i = 0; i < newList.length; i++) {
    if (Array.isArray(newList[i])) {
      tempDepth++;
      plus2DepthFinder(newList);
    }
  }
  return `The array's depth is ${tempDepth}`;
}

console.log(firstLayerOfDepthDetector([1, 2, 20]));
console.log(
  firstLayerOfDepthDetector([1, [3, [5, 6], 7, [8, [9]], 10], 11, [12, 14], 0])
);
console.log(
  firstLayerOfDepthDetector([10, [25, 13], [14, [33, 11, [2, [1]], [55]]], 2])
);
