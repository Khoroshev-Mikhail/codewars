console.log('----------------------------Task:312 "Stringing me along"----------------------------')
function add(y){
  return function two(x){
    return add(x + y)
  }
}
console.log(add(1)(2)(3)(4)(5))
