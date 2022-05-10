const Folder = require("./last_lessons/folder");

const f = Folder([
  "a",
  "b",
  Folder([
    "c",
    "d",
    Folder([]),
    Folder([
      "x",
    ]),
  ]),
  Folder([
    "z",
    "p",
  ]),
  "e",
]);

// f.size(x => {
//   console.log(x);
//   f.read(0, (data) => {
//     f.read(1, (data) => {
    
//     })
//   })
// })

// const psize = function(){
//     return new Promise(function(resolve, reject){
//         f.size((el) => {
//             resolve(el)
//         })
//     })
// } 
// const pread = function(i){
//     return new Promise(function(resolve, reject){
//         f.read(i, el => {
//             resolve(el)
//         })
//     })
// }

function promisify(fn) {
    return function(...args){
        return new Promise((resolve, reject) => {
            fn(...args, el =>{
                resolve(el)
            })
        })
    }
}

function allFiles(folder) {
  const pread = promisify(folder.read.bind(folder));
  const psize = promisify(folder.size.bind(folder));
  
  return psize().then(size => {
      let arr = []
      for(let i = 0; i < size; i++){
          arr.push(pread(i).then(file => {
            if(file instanceof Folder){
                return allFiles(file)
            }
            return file
        }))
      }
      return Promise.all(arr).then(el => el.flat())
  })
}
// allFiles(f).then(result => {
//   console.log("result", result); // ["a", "b", "c", "d", "e", "z", "x", "p"]
// })



//Вторник 12:30
//ДЗ реализовать по аналогии all
// allSettled any race


function all(arr){
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        for(let i = 0; i < arr.length; i++){
            arr[i].then(x => {
                result[i] = x
                count++
                if(count === arr.length){
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        }
    })
}
function allSettled(arr){
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            arr[i]
                .then(
                    value => ({ status: 'fullfilled', value }),
                    reason => ({ status: 'rejected', reason })
                ).then(x => {
                    result[i] = x
                    count++;
                    if(count === arr.length){
                        resolve(result)
                    }
                })
        }
    })
}
function any(arr){
    return new Promise((resolve, reject) => {
        let arrForErrors = []
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            arr[i]
            .then(resolve, err => {
                    count++
                    arrForErrors[i] = err
                    if(count === arr.length){
                        reject(arrForErrors)
                    }
                })
        }
    })
}
function race(promises){
    return new Promise((resolve, reject) => {
        for(const promise of promises){
            promise.then(resolve, reject)
        }
    })
}

let ara = [
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(1), 1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(2), 1500)
    }),
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(3), 2000)
    }),
]

// all(ara).then(console.log, console.log)
//allSettled(ara).then(console.log, console.log)
//any(ara).then(console.log, console.log)
//race(ara).then(console.log, console.log)



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
    if (fns.length === 0) {
        return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
        let arr = [...fns];
        let result = []
        let count = fns.length;
        function helper(){
            if(arr.length === 0){
                return;
            }
            let i = fns.length - arr.length
            arr.shift()().then(x => {
                result[i] = x
                count--
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


allWithLimit(asyncFns, 8).then(console.log);
// 
//Четверг 17:30
function cube(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < .5) {
                reject("err " + x);
            } else {
                resolve(x ** 3);
            }
        }, 500);
    })
}


//function withRetry(fn, attempts) {
    


//const cubeWithRetry = withRetry(cube, 4);

//cubeWithRetry(3).then(console.log, console.log); // 50% + 25% + 12.5% + 6.25% === 93.75% vs 6.25%
