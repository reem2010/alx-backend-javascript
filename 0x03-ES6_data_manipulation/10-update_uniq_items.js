function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  map.forEach((val, key) => {
    if (val === 1) {
      map.set(key, 100);
    }
  });
  return map;
}

export default updateUniqueItems;
