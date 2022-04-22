process.stdout.write('prompt > ');

let pwd = require('./pwd.js')

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();

  if (cmd === 'pwd') pwd.func();
  else{
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});


// process.stdin.on('data', (data) =>{
//   const cmd = data.toString().trim();

//   if (cmd === 'pwd'){

//     // got process.cwd from stackoverflow:
//     // https://stackoverflow.com/questions/3151436/how-can-i-get-the-current-directory-name-in-javascript

//     process.stdout.write(process.cwd());
//     process.stdout.write('\nprompt > ');
//   }
//   else {
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
//   }
// });
