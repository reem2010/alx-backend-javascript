function getStudentsByLocation(students, city) {
  return students.filter((data) => data.location === city);
}

export default getStudentsByLocation;
