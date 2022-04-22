const fs = require('fs')

fs.readFile('./bash.js', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
