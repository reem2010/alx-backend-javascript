const http = require('http');
const fs = require('fs');

function countStudents(url, responce) {
  return new Promise((resp, rej) => {
    const res = {};
    fs.readFile(url, 'utf8', (err, data1) => {
      if (err) {
        rej(new Error('Cannot load the database'));
        return;
      }
      let data = data1.split('\n').slice(1);
      data = data.filter((val) => val);
      if (data.length === 0) responce.write(`Number of students: ${data.length}`);
      else {
        responce.write(`Number of students: ${data.length}\n`);
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
        const key1 = key.slice(0, key.length - 1);
        key1.forEach((ele) => {
          responce.write(
            `Number of students in ${ele}:`
      + ` ${res[ele].length}. List: ${res[ele].join(', ')}\n`,
          );
        });

        responce.write(
          `Number of students in ${key[key.length - 1]}:`
    + ` ${res[key[key.length - 1]].length}. List: ${res[key[key.length - 1]].join(', ')}`,
        );
      }
      resp();
    });
  });
}

const path = process.argv.length === 3 ? process.argv[2] : '';
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    await countStudents(path, res);
    res.end();
  }
}).listen(1245);

module.exports = app;
