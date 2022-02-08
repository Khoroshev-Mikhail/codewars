console.log('----------------------------Task:309 "I Spy"----------------------------')
function spyOn(fn){
  let cache = {}
  return (...args) => {
    if(!args){
      return cache[callCount]
    } else{
      return fn(...args)
    }
  }
}

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );
console.log(adderSpy())
console.log(adderSpy(2,5))
console.log(adderSpy(2,5))