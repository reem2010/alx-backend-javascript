function hasValuesFromArray(set, array) {
  let res = false;
  array.forEach((element) => {
    // console.log(element)
    // console.log(set.has(element))
    if (set.has(element)) {
      res = true;
    } else {
      res = false;
    }
  });
  return res;
}
export default hasValuesFromArray;
