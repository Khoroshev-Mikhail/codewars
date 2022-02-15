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


console.log('----------------------------Task:313 "currying-vs-partial-application"----------------------------')
function add(x, y, z) {
  return x + y + z;
}
function curryPartial(fn, ...arr) {
  function accumulator(lengthOfFn, args){
    return function currentCurry(...x){
      if(lengthOfFn <= x.length){
        return fn(...args, ...x)
      }
      return accumulator(lengthOfFn - x.length, [...args, ...x])
    }
  }  
  return accumulator(fn.length, [...arr])
}
let ara = curryPartial(add)
console.log(curryPartial(add)(22, 2, 2, 2, 2))


console.log('----------------------------Task:312 "Stringing me along"----------------------------')
function add(y = 0){  
  function two(x = 0){
    return add(x + y)
  }
  two[Symbol.toPrimitive] = () => y
  return two
}
console.log(add()(2)(3)()(4)())


