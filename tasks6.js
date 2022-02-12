console.log('----------------------------Task:311 "Stringing me along"----------------------------')
function createMessage(str) {
    return (x) => {
        if(x === undefined){
            return str
        } else{
            return createMessage(str + ' ' + x)
        }
    }
}
console.log(createMessage("Hello")("World!")("how")("are")("you?")())

console.log('----------------------------Task:312 "Stringing me along"----------------------------')
function add(y){
  return function two(x){
    return add(x + y)
  }
}
console.log(add(1)(2)(3)(4)(5))


