console.log('----------------------------Task:312 "Stringing me along"----------------------------')
function add(n){
  let sum = n
  return function repit(x){
    if(x === undefined){
      return sum
    } else {
      sum += x
      return repit
    }
  }
}

console.log(add(1)(2)(3)())
