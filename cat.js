const fs = require('fs');
function func (fileName) {
    fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    }
    else {
      let output = files.filter((file) => (file == fileName))
      let selectedFile = output[0]
      fs.readFile(`./${selectedFile}`, 'utf-8', (err,data) => {
        if (err) throw err;
        console.log(data);
        process.stdout.write("\nprompt > ")
      })
    }
  })
}
module.exports.func = func;
