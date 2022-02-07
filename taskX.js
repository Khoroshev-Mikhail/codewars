console.log('----------------------------Task:308 "once"----------------------------')
function once(fn) {
  //fn.apply(this, arguments)????
  let count = 0
  return (...x) => {
    if(count == 0){
      count++
      return fn(...x)
    }else{
      undefined
    }
  }
}
logOnce = once(Math.max)
console.log(logOnce(6, 2, 99, 4)) 
console.log(logOnce(99, 55, 31))
