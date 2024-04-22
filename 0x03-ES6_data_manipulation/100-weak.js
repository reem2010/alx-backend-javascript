export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.get(endpoint)) {
    weakMap.set(endpoint, 1);
    return;
  }
  const count = weakMap.get(endpoint);
  if (count >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}
