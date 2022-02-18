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

console.log('----------------------------Task:504 "Digits Average"----------------------------')
function digitsAverage(input) {
  let arr = [...input.toString()].map(Number)
  if(arr.length === 1){
    return input
  }
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(i < arr.length - 1){
      newArr.push(Math.round((arr[i] + arr[i + 1])/2))
    }
  }
  const result = +newArr.join('')
  return digitsAverage(result)
}
console.log(digitsAverage(246))

console.log('----------------------------Task:503 "happy-numbers-5"----------------------------')
let cache = new Set()
function isHappyNumber(x){
  if(cache.has(x)){
    cache = new Set()
    return false
  }  
  if(x === 1){
    cache = new Set()
    return true
  }
  cache.add(x)
  let newX = [...x.toString()].map(Number).reduce((a, b) => a + Math.pow(b, 2), 0)
  return isHappyNumber(newX)
}
function happyNumbers(x){
  let result = []
  for(let i = 0; i <= x; i++){
    if(isHappyNumber(i)){
      result.push(i)
    }
  }
  return result
}
console.log(happyNumbers(100))