console.log('----------------------------Task:309 "I Spy"----------------------------')
function spyOn (func) {
  function inner(func){
    return func
  }

  inner.ara = () => { return 1}

  return inner
}

function func(x){
  return x*x
}
let fn = func(5)
let spi = spyOn(fn)
console.log(spi.ara())