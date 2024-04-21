function getStudentsByLocation(students, city) {
  return students.map((data) => data.location === city);
}

export default getStudentsByLocation;
