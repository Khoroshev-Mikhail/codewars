console.log('----------------------------Task:308 "once"----------------------------')
//Не работает
function once(fn) {
  return fn.name
}
logOnce = once(console.log)
logOnce("foo")
logOnce("bar")


function makeCounter() {
  let count = 0;

  return function() {
    return count++; // есть доступ к внешней переменной "count"
  };
}