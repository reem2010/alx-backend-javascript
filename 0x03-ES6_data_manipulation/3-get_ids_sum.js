function getStudentIdsSum(students) {
  return students.map((data) => data.id).reduce((total, current) => total + current);
}
export default getStudentIdsSum;
