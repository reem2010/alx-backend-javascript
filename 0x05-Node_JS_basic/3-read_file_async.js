const fs = require('fs');

function countStudents(url) {
  return new Promise((resp, rej) => {
    const res = {};
    fs.readFile(url, 'utf8', (err, data1) => {
      if (err) {
        return rej(new Error('Cannot load the database'));
      }
      let data = data1.split('\n').slice(1);
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
      resp();
    });
  });
}
module.exports = countStudents;
