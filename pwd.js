function func(){
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}


module.exports.func = func;
