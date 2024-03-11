export default function createIteratorObject(report) {
  const emp = [];
  const { allEmployees } = report;
  // eslint-disable-next-line guard-for-in
  for (const key in allEmployees) {
    emp.push(...(allEmployees[key]));
  }
  return emp;
}
