console.log('----------------------------Task:309 "I Spy"----------------------------')
function spyOn (func) {
  let count = 0
  let cache = new Map()
  function inner(x){
    count++
    let result = cache.get(n)
    if(!result){
      result = func(x)
      cache.set(x, result)
    }
    return result
  }

  inner.callCount = () => {
    return count
  }
  inner.wasCalledWith = (val) => {
    return cache.has(val)
  }
  inner.returned = (val) => {
    if(cache.has(val)){
      
    }
  }

  return inner
}

function func(x){
  return x*x
}
let fn = func(5)
let spi = spyOn(fn)
console.log(spi.ara())