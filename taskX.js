console.log('----------------------------Task:309 "I Spy"----------------------------')
let worker = {
  slow(min, max){
    return min + max
  }
}
function chachingDecoration(fn, hash){
  let cache = new Map();
  return function(){
    let key = hash(arguments)
    if(cache.has(key)){
      return cache.get(key) + ' --- из кеша' 
    } else{
      let result = fn.apply(this, arguments)
      cache.set(key, result)
      return result
    }
  }
}
function hash(){
  return [].join.call(arguments) // Почему не работает???
}
worker.slow = chachingDecoration(worker.slow, hash)
console.log(worker.slow(3,5))
console.log(worker.slow(3,5))