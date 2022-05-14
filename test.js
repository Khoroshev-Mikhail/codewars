//Четверг 17:30
function cube(x) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log("++");
          if (Math.random() < .9) {
              reject("err " + x);
          } else {
              resolve(x ** 3);
          }
      }, 500);
  })
}


function withRetry(fn, attempts) {
  return function ara(x, newAttempts = attempts){
      return fn(x)
        .catch(
          err => {
            newAttempts--
            if(newAttempts === 0){
              throw err
            } else{
              return ara(x, newAttempts)
            }
        })
  }
}

// https://www.codewars.com/kata/happy-numbers-5
// const cubeWithRetry = withRetry(cube, 4);
// cubeWithRetry(3)
//   .then(x => console.log(1, x), x => console.log(2, x))
  // .then(() => {
  //   cubeWithRetry(3)
  //     .then(console.log, console.log)
  // })


// let succesfulCount = 0;
// let countOfErrors = 0;

// for(let i = 0; i < 10000; i++){
//   cubeWithRetry(3).then(()=>{
//       succesfulCount++
//     }, ()=>{
//       countOfErrors++
//     }).then(()=>{
//       if(succesfulCount + countOfErrors === 10000){
//         console.log(`succesfulCount = ${succesfulCount}`)
//         console.log(`countOfErrors = ${countOfErrors}`)
//       }
//     })
// }
// 50% + 25% + 12.5% + 6.25% === 93.75% vs 6.25%




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

// const then = Promise.prototype.then;

// Promise.prototype.then = function(...args) {
//   console.log("---", args);
//   return then.apply(this, args);
// }

// const q = Promise.reject("qwe")
//   .then(x => x + "a") // rejected<"qwe">
//   .then(x => x + "b") // rejected<"qwe">
//   .catch(x => x + "c") // fulfilled<"qwec">


// const q = Promise.resolve(1); // fulfilled
// console.log(q);
// const p = q.then(x => x * 2); //
// console.log(p);



// //setTimeout(() => console.log(q), 0);

let i = 0;
function f1() {
  if (i === 500_000_000) return;
  i++;
  // console.log(i);
  // setTimeout(() => {
  //   f1();
  // }, 0);
  Promise.resolve().then(() => {
    f1();
  })
}

// queueMicrotask(() => {
//   // ...
// })

// https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide

f1();

console.time("!!");
queueMicrotask(() => {
  console.timeEnd("!!");
  console.log("???");
}, 50);

//Сверстать компоненту