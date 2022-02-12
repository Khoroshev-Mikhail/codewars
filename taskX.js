function add(y){  
  function two(x){
    return add(x + y)
  }
  two[Symbol.toPrimitive] = () => y
  return two
}
console.log(+add(2)(3)(4))