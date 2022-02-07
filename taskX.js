console.log('----------------------------Task:308 "once"----------------------------')
function once(fn) {
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
logOnce = once(Math.max) // здесь вызывается только once
console.log(logOnce(6, 2, 99, 4)) //Здесь вызывается отдельно живущая fn. Как добраться до её "тела" внутри функции fn?
console.log(logOnce(99, 55, 31))
