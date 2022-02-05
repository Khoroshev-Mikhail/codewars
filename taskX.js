console.log('----------------------------Task:306 "Function composition"----------------------------')
function makeLooper(str) {
  let count = -1
  const arr = str.split('')
  return () => {
    count++
    if(count > str.length - 1){
      count = 0
    }
    return arr[count]
  }
}
let abc = makeLooper('abc')
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())
