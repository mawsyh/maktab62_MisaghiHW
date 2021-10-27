let newList;
function flatter(list) {
  newList = [].concat.apply([], list);
  for (let i = 0; i < newList.length; i++) {
    if (Array.isArray(newList[i])) {
      flatter(newList);
    }
  }
  return newList;
}

console.log(flatter([10, [25, 13], [14, [55]], 2]));
console.log(flatter([10, 2]));
console.log(flatter([10, [2], [23, 12], [2, 5, [4, 3, 0, [4, 1, 3]]]]));
