console.log('----------------------------Task:500 "Factorial"----------------------------')
function smartSum(...x){
  return x.reduce((a,b) => {
    if(!Array.isArray(b)){
      return a + b
    }
    return a + smartSum(...b)
  }, 0)
}
console.log(smartSum(1,2,[[3,4],5],6))

console.log('----------------------------Task:504 "Digits Average"----------------------------') //
function digitsAverage(input) {
  if(input < 10) {
    return input
  }
  const digits = [...input.toString()].map(Number)

  const newArr = []
  for(let i = 0; i < digits.length - 1; i++){
      newArr.push(Math.round((digits[i] + digits[i + 1])/2))
  }
  const result = +newArr.join('')
  return digitsAverage(result)
}
console.log(digitsAverage(246))

console.log('----------------------------Task:503 "happy-numbers-5"----------------------------')

function isHappyNumber(x, cache = new Set()){
  if(cache.has(x)){
    return false
  }  
  if(x === 1){
    return true
  }
  cache.add(x)
  const newX = [...x.toString()].map(Number).reduce((a, b) => a + b ** 2, 0)
  return isHappyNumber(newX, cache)
}


function happyNumbers(x){
  const result = []
  for(let i = 0; i <= x; i++){
    if(isHappyNumber(i)){
      result.push(i)
    }
  }
  return result
}
console.log(happyNumbers(100))

console.log('----------------------------Task:220 "Is a number prime?"----------------------------')
function isPrime(num) {
  if(num <= 1) {
    return false
  }
  const root = Math.sqrt(num);
  // i ** 2 <= num
  // i <= Math.sqrt(num);
  for(let i = 2; i <= root; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

// 120
// 1 2 3 4 5 6 8 10 12 15 20 24 30 40 60 120

// num

// num === A * B
//         3 * 40
//         4 * 30
//         8 * 15
//         40 * 3

// B === num / A
// A <= B
// A <= num / A 
// A² <= num

console.time("prime")
console.log(isPrime(2 ** 31 - 1))
console.timeEnd("prime")

console.log('----------------------------Task:227 "Sorting by bits"----------------------------')
function countOfBits(x) {
  // const length = Math.floor(Math.log2(x))
  // let result = []
  // for(let i = length; i >= 0; i--){
  //   result.push(Math.pow(2, i))
  // }
  // for(let i = 0; i <= length; i++){
  //   if( (x - result[i]) >= 0 ){
  //     x = x - result[i]
  //     result[i] = 1
  //   } else{
  //     result[i] = 0
  //   }
  // }

  let result = 0;
  while(x !== 0) {
    // if (x % 2 === 1) {
    //   result++;
    // }
    result += x % 2;
    x = Math.floor(x / 2);
  }

  // x.toString(2).split("").filter(el => el === "1").length

  // return result.filter(el => el === 1).length
}
function sortByBit(arr) {
  return arr.sort((a, b) => countOfBits(a) - countOfBits(b) || a - b)
}

console.log('----------------------------Task:310 "Church Booleans"----------------------------')
const True = T => F => T
const False = T => F => F


// if(cond, option1, option2)

// functional programming
// - immutable
// - curry
// - pure function
// - functions are first-class citizen

// a => a + 1
// a -> a + 1

const And = A => B => A(B)(False);
// And(True)(True) === True
// And(True)(False) === False  
// And(False)(True) === False
// And(False)(False) === False

const Or = A => B => A(True)(B)
// OR(True)(True) === True
// Or(False)(True) === True
// Or(True)(False) === True
// OR(False)(False) === False 

const Not = A => A(False)(True)
// Not(False) === True
// Not(True) === False

// A xor B === A && !B || !A && B
const Xor = A => B => Or(And(A, Not(B)), And(B, Not(A)))

//const Xor = A => B => A(B(False)(A))(A(True)(B))
const Xor = A => B => A( Not(B) )(B)
// Xor(True)(True) === False
// Xor(False)(True) === True
// Xor(True)(False) === True
// Xor(False)(False) === False

console.log('----------------------------Task:313 "Currying-vs-partial-application"----------------------------')
function curryPartial(fn, ...args) {
    if(fn.length <= args.length){
        return fn(...args)
    }
    return function currentCurry(...x){
        return curryPartial(fn, ...args, ...x)
    }
}

console.log('----------------------------Task:314 "ES5 Generators(i)"----------------------------')
function generator(fn, ...args){
    return {
        next: fn(...args),
    }
}
function fibonacciSeq(){
    let curr = 1;
    let prev = 1;
    return () => {
        let curr2 = curr;
        curr = prev;
        prev += curr2
        return curr2
    }
}
//var seq = generator(fibonacciSeq)
function factorialSeq(){
    // let n = -1; //Рефакторинг в данном случае???
    // function factorial(n){
    //     if(n <= 1){
    //         return 1
    //     }
    //     return n * factorial(n - 1)
    // }
    let n = 0;
    let factorial = 1;
    return () => {
      const tmp = factorial;
      n++;
      factorial *= n;
      return tmp;
    }
}
//var seq = generator(factorialSeq)
function rangeSeq(start, step){
    let currentStep = start; //Рефакторинг? Как изменить переменную после её возвращения
    return () => {
        const tmp = currentStep;
        currentStep += step;
        return tmp;
    }
}
//var seq = generator(rangeSeq, 1, 2)
function isPrime(num) {
    if(num <= 1 || num % 1 != 0) {
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0){
        return false
        }
    }
    return true
}
function primeSeq(){
    let primeNum = 2;
    return () => {
        const tmp = primeNum;
        do{
            primeNum++
        }while(!isPrime(primeNum))
        return tmp
    }
}
function partialSumSeq(...args){
    let arr = []
    let i = -1 //Тоже самое
    args.reduce((a, b) => {
        arr.push(a + b)
        return a + b
    }, 0)
    return () =>{
        i++
        if(arr[i] === undefined){
            return error;
        }
        return arr[i]
    }

}
//var seq = generator(partialSumSeq, 1, 3, 7, 2, 0)
