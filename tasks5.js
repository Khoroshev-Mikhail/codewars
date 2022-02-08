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


console.log('----------------------------Task:305 "Function composition"----------------------------')
const addOne = (a) => a + 1
const multTwo = (b) => b * 2
compose = (...args) => (n) => args.reduceRight( (a, b) => b(a), n)

console.log(compose(multTwo, addOne)(5))

console.log('----------------------------Task:306 "lazy repeater"----------------------------')
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


console.log('----------------------------Task:307 "Memo"----------------------------')
//Не решено (не проходит 1 тест из 10)
function memo(fn) {
  let cache = {} //let cache = new Map()
  return (n) => {
    if(n in cache){
      return cache[n]
    } else{
      let result = fn(n)
      cache[n] = result
      return result
    }
  }
}
/*
cumulative tree depth with expensive depth
sumDepth()
Possibly your memo function cannot handle `Object` arguments: expected 140000 to equal 23843
*/
/*
describe("cumulative tree depth with expensive depth",()=>{
  const toTree = s => s ? { value: s[0], left: toTree(s.slice(1,s.length/2+1)), right: toTree(s.slice(s.length/2+1)) } : null ;
  const depth = memo( tree => tree ? busyWait(5e3) || 1 + Math.max(depth(tree.left),depth(tree.right)) : 0 );
  const sumDepth = tree => tree ? depth(tree) + sumDepth(tree.left) + sumDepth(tree.right) : 0 ;
  const busyWait = n => n && busyWait(n-1) ;
  let duration;
  it("<code>sumDepth()</code>",()=>{
    const start = Date.now();
    Test.assertEquals( sumDepth(toTree("-".repeat(1e4))), 23843, "Possibly your memo function cannot handle `Object` arguments" );
    duration = Date.now() - start;
  });
  it("That should have been done within a second",()=>{
    Test.expect( duration < 1000, `but it took ${duration} ms` );
  });
});
*/

console.log('----------------------------Task:308 "once"----------------------------')
function once(fn) {
  let count = 0
  return (...x) => {
    if(count == 0){
      count++
      return fn(...x)
    }else{
      undefined
    }
  }
}
logOnce = once(Math.max) // здесь вызывается только once
console.log(logOnce(6, 2, 99, 4)) //Здесь вызывается отдельно живущая fn. Как добраться до её "тела" внутри функции fn?
console.log(logOnce(99, 55, 31))


//Не решено
console.log('----------------------------Task:312 "A Chain adding function"----------------------------')
function add(m){
  let sum = 0;
  //Если add(x) возвращает число тогда += sum возвращаем sum
  //Если add(x) возвращает функцию тогда += sum и возвращаем функцию add(x)
  return (n) =>{ //функция
    sum += n
    return (z) => { //Функция
      sum += z
      return (y) => { //число
        sum += y
        return sum
      }
    }
  }
}
console.log(add(1)(2)(3)(4))