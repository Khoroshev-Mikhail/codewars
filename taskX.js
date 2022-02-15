console.log('----------------------------Task:309 "I Spy"----------------------------')
function spyOn (func) {
  let count = 0
  let cache = []
  let cacheResults = []
  function inner(...x){
    count++
    let result = func(...x)
    cache.push(...x)
    cacheResults.push(result)
    return result
  }

  inner.callCount = () => {
    return count
  }
  inner.wasCalledWith = (val) => {
    return cache.includes(val)
  }
  inner.returned = (val) => {
    return cacheResults.includes(val)
  }
  return inner
}

function func(...x){
  return x+x
}
let spi = spyOn(func)
//spi(2);
spi('hello', 'hi', 'howdy');
spi('goodbye', 'bye', 'see ya');
console.log(spi.wasCalledWith('hi'))
//console.log(spi.returned(4))