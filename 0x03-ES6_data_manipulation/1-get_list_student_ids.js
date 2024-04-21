function getListStudentIds(inp) {
  if (!Array.isArray(inp)) {
    return [];
  }
  return inp.map((data) => data.id);
}

export default getListStudentIds;
