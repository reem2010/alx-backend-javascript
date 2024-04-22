function cleanSet(set, startString) {
  const ind = startString.length;
  const res = '';
  if (ind === 0) {
    return res;
  }
  const array = Array.from(set).filter((ele) => ele.startsWith(startString)).map((ele) => ele.replace(startString, ''));
  return array.join('-');
}

export default cleanSet;
