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
    //Либо
    /*let i = 0;
    while(i++){
        if(args.every(fns => fns(i))) {
            return i
        }
    }
    */
}
console.log(detect_int((x) => x % 5 == 0, (x) => x % 3 == 0))

console.log('----------------------------Task: "Рекурсия1"----------------------------')
function sumTo(n){
  //  return (1 + n) / 2 * n
  if(n === 1){
    return n
  } else {
    return n + sumTo(n - 1)
  }
}
console.log(sumTo(100))

console.log('----------------------------Task: "Рекурсия2"----------------------------')
function factorial(n){
  if(n === 1){
    return n
  } else {
    return n * factorial(n - 1)
  }
}
console.log(factorial(5))
console.log('----------------------------Task: "Рекурсия3"----------------------------')
function fib(n){
  if(n <= 1){
    return n
  } else {
    return fib(n-1) + fib(n-2)
  }
}
console.log(fib(7))
console.log('----------------------------Task: "Рекурсия4"----------------------------')
let obj = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list){
  console.log(list.value)
  if(list.next !== null){
    printList(list.next)
  }
}
console.log(printList(obj))

console.log('----------------------------Task:301 "Ho ho ho"----------------------------')
function ho() {
  return str ? 'Ho ' + str : 'Ho!'
}
