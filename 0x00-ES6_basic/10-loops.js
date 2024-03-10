export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const val of array) {
    const value = val;
    array[i++] = appendString + value;
  }

  return array;
}
