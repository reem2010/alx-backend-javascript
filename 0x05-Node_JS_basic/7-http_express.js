const express = require('express');
const fs = require('fs');

function countStudents(url) {
  let file = '';
  return new Promise((resp, rej) => {
    const res = {};
    fs.readFile(url, 'utf8', (err, data1) => {
      if (err) {
        rej(new Error('Cannot load the database'));
        return;
      }
      let data = data1.split('\n').slice(1);
      data = data.filter((val) => val);
      if (data.length === 0) file += `Number of students: ${data.length}`;
      else {
        file += `Number of students: ${data.length}\n`;
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
          file = `${file}Number of students in ${ele}:`
      + ` ${res[ele].length}. List: ${res[ele].join(', ')}\n`;
        });

        file = `${file
        }Number of students in ${key[key.length - 1]}:`
    + ` ${res[key[key.length - 1]].length}. List: ${res[key[key.length - 1]].join(', ')}`;
      }
      resp(file);
    });
  });
}

const app = express();
const filePath = process.argv.length === 3 ? process.argv[2] : '';
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  const file = await countStudents(filePath);
  res.send(`This is the list of our students\n${file}`);
});

app.listen(1245);

module.exports = app;
