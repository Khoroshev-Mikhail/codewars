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
          el => {
            resolve(el)
          },
          err => {
            console.log(attempts)
            attempts--
            if(attempts === 0){
              /*return*/ reject(err)
            }
            if(attempts > 0){ //Почему без этого if перменная attempts может уйти в минус? 
                              //reject(err) не останавливает выполнение кода?
              helper()
            }
        })
      }
      helper()
    })
  }
}

//cube(3).then(console.log)
const cubeWithRetry = withRetry(cube, 4);
cubeWithRetry(3).then(console.log, console.log); // 50% + 25% + 12.5% + 6.25% === 93.75% vs 6.25%