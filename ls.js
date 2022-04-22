const fs = require('fs');
function func () {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    }
    else {
      process.stdout.write(files.join('\n'))
      process.stdout.write("\nprompt > ")
    }
  })
}

module.exports.func = func;







// function func(){
//   process.stdout.write(process.cwd());
//   process.stdout.write('\nprompt > ');
// }


// module.exports.func = func;

