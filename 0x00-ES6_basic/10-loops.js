export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const val of array) {
    const value = val;
    array[i] = appendString + value; // eslint-disable-line no-param-reassign
    i++; // eslint-disable-line no-plusplus
  }

  return array;
}
