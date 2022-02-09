console.log('----------------------------Task:309 "I Spy"----------------------------')
let worker = (min) => {
  return min*2
}
function spy(fn){
  wrapper.calls = [];
  wrapper.countOfCalls = 0;
  wrapper.results = [];
  function wrapper(...args){
    wrapper.countOfCalls++
    wrapper.calls.push(...args)
    let result = fn.apply(this, arguments)
    wrapper.results.push(result)
    return result
  }

  wrapper.callCount = () => {
    return wrapper.countOfCalls
  }
  wrapper.wasCalledWith = (val) =>{
    return wrapper.calls.includes(val)
  }
  wrapper.returned = (val) => {
    return wrapper.results.includes(val)
  }
  return wrapper;
}
worker = spy(worker)
worker(1)
console.log(worker(5))
console.log(worker.calls)
console.log(worker.wasCalledWith(1))
console.log(worker.returned(8))