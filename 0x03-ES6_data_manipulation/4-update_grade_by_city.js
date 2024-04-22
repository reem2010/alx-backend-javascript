function updateStudentGradeByCity(students, city, grade) {
  return students.filter(
    (data) => data.location === city,
  ).map(
    (stu) => {
      const gradeObj = grade.filter((data) => data.studentId === stu.id);
      if (gradeObj.length === 0) {
        return { ...stu, grade: 'N/A' };
      }
      return { ...stu, grade: gradeObj[0].grade };
    },
  );
}

export default updateStudentGradeByCity;
