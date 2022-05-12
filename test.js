//Четверг 17:30
function cube(x) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (Math.random() < .9) {
              reject("err " + x);
          } else {
              resolve(x ** 3);
          }
      }, 500);
  })
}


function withRetry(fn, attempts) {
  return function(x){
    return new Promise((resolve, reject) => {
      function helper(){
        fn(x)
        .then(
          resolve,
          err => {
            console.log(`Rejected ${attempts}`)
            attempts--
            if(attempts === 0){
              reject(err)
              return; //reject не останавливает выполнение кода??
            }
            //Нужно ли здесь условие attempts > 0?
            helper()
        })
      }
      helper()
    })
  }
}

//cube(3).then(console.log)
const cubeWithRetry = withRetry(cube, 4);
cubeWithRetry(3).then(console.log, console.log); // 50% + 25% + 12.5% + 6.25% === 93.75% vs 6.25%




const asyncFns = [
  () => new Promise((resolve, reject) => setTimeout(()=> resolve(0), Math.random() * 1000)),
  () => new Promise((resolve, reject) => setTimeout(()=> resolve(1), Math.random() * 1000)),
  () => new Promise((resolve, reject) => setTimeout(()=> resolve(2), Math.random() * 1000)),
  () => new Promise((resolve, reject) => setTimeout(()=> resolve(3), Math.random() * 1000)),
  () => new Promise((resolve, reject) => setTimeout(()=> resolve(4), Math.random() * 1000)),
  () => new Promise((resolve, reject) => setTimeout(()=> resolve(5), Math.random() * 1000)),
  () => new Promise((resolve, reject) => setTimeout(()=> resolve(6), Math.random() * 1000)),
  () => new Promise((resolve, reject) => setTimeout(()=> resolve(7), Math.random() * 1000)),
]
function allWithLimit(fns, limit){
  let arr = [...fns];
  let count = fns.length;
  let result = []
  return new Promise((resolve, reject) => {
      function helper(){
          if(arr.length === 0){
              return; //resolve не завершает код???
          }
          let i = fns.length - arr.length
          arr.shift()().then(x => {
              result[i] = x
              count--
              if(count > 0){
                  helper()
              }
              if(count === 0){
                  resolve(result) 
              }
          })
      }
      for(let i = 0; i < limit; i++){
          helper()
      }
  })
}
//allWithLimit(asyncFns, 8).then(console.log);


//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
function zero(func) {return func ? func(0) : 0}
function one(func) {return func ? func(1) : 1}
function two(func) {return func ? func(2) : 2}
function three(func) {return func ? func(3) : 3}
function four(func) {return func ? func(4) : 4}
function five(func) {return func ? func(5) : 5}
function six(func) {return func ? func(6) : 6}
function seven(func) {return func ? func(7) : 7}
function eight(func) {return func ? func(8) : 8}
function nine(func) {return func ? func(9) : 9}

function plus(r) {return function(l){return l + r}}
function minus(r) {return function(l){return l - r}}
function times(r) {return function(l){return l * r}}
function dividedBy(r) {return function(l){return l / r}}

//console.log(seven(times(seven())))