console.log('----------------------------Task 300: "name-that-integer"----------------------------')
function detect_int(...args) {
    if(typeof args === 'undefined') {
        return 1
    }
    for (let i = 1; /*i < -Math.max()*/; i++){
        if(args.every(fns => fns(i))) {
            return i
        }
    }
}
console.log(detect_int((x) => x % 5 == 0, (x) => x % 3 == 0))

console.log('----------------------------Task:301 "Ho ho ho"----------------------------')
function ho(str) {
  return str ? 'Ho ' + str : 'Ho!'
}
//console.log(ho(ho(ho())))

console.log('----------------------------Task:303 "Functional Addition"----------------------------')
function add(a) {
  return function (b){
    return a + b
  }
}
let addOne = add(3)

console.log(addOne(3))

console.log('-----------Task:304 "currying-functions-multiply-all-elements-in-an-array"-----------')
multiplyAll = a => b => a.map(el => el* b)

console.log(multiplyAll([1, 2, 3])(3))

console.log('----------------------------Task:305 "always"----------------------------')
always = n => () => n
console.log(always(5)())


console.log('----------------------------Task:306 "Function composition"----------------------------')
const addOne = (a) => a + 1
const multTwo = (b) => b * 2
compose = (...args) => (n) => args.reduceRight( (a, b) => b(a), n)

console.log(compose(multTwo, addOne)(5))

console.log('----------------------------Task:307 "lazy repeater"----------------------------')
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
  /*
    let i = 0;
  return () => str[i++%str.length];
  */
}
let abc = makeLooper('abc')
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())
