const Folder = require("./folder");

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
            arr[i].then(x => {
                count++;
                result[i] = {status: 'fullfilled', value: x}
                if(count === arr.length){
                    resolve(result)
                }
            }, err => {
                count++;
                result[i] = {status: 'rejected', reason: err}
                if(count === arr.length){
                    reject(result)
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
            .then(x => { 
                    resolve(x)
                }, err => {
                    count++
                    arrForErrors[i] = err
                    if(count === arr.length){
                        reject(arrForErrors)
                    }
                })
        }
    })
}
function race(arr){
    return new Promise((resolve, reject) => {
        for(let i = 0; i < arr.length; i++){
            arr[i].then(x => resolve(x), err => reject(err))
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

all(ara).then(console.log, console.log)
//allSettled(ara).then(console.log, console.log)
//any(ara).then(console.log, console.log)
//race(ara).then(console.log, console.log)



