function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  const int8 = new Int8Array(buf);
  if (position > int8.length - 1) {
    throw Error('Position outside range');
  }
  int8[position] = value;
  return new DataView(buf);
}

export default createInt8TypedArray;
