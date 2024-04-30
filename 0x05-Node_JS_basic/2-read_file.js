const fs = require('fs');

function countStudents(url) {
  let data = '';
  const res = {};
  try {
    data = fs.readFileSync(url, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  data = data.split('\n').slice(1);
  data = data.filter((val) => val);
  console.log(`Number of students: ${data.length}`);
  data = data.map((val) => val.split(','));
  data = data.map((val) => val.filter(
    (_, ind, arr) => ind === 0 || ind === arr.length - 1,
  ))
    .map((val) => ({ name: val[0], FIELD: val[1] }));
  data.forEach((ele) => {
    if (!res[ele.FIELD]) res[ele.FIELD] = [];
    res[ele.FIELD] = [...res[ele.FIELD], ele.name];
  });
  const key = Object.keys(res);
  key.forEach((ele) => {
    console.log(
      `Number of students in ${ele}:`
      + ` ${res[ele].length}. List: ${res[ele].join(', ')}`,
    );
  });
}
module.exports = countStudents;
