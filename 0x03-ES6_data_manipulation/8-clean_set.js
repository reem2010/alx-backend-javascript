function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const ind = startString.length;
  const res = '';
  if (ind === 0) {
    return res;
  }
  const array = Array.from(set).filter(
    (ele) => ele.startsWith(startString),
  ).map(
    (ele) => ele.slice(ind),
  );
  return array.join('-');
}

export default cleanSet;
