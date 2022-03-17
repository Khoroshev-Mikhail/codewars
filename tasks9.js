console.log('----------------------------Task:508 "Array Deep Count"----------------------------')
function deepCount(arr){
  let sum = arr.length;
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      sum += deepCount(arr[i])
    }
  }
  return sum
}
console.log(deepCount([1, 2, [3, 4, [5]]]))

console.log('----------------------------Task:509 "Sum The Tree"----------------------------')
var simpleNode = {
  value: 10, 
  left: {
    value: 1,
    left: null, 
    right: null
  }, 
  right: {
    value: 2, 
    left: null, 
    right: null
  }
};

function sumTheTreeValues(root){
  let sum = root.value
  if(root.left !== null){
    sum += sumTheTreeValues(root.left)
  }
  if(root.right !== null){
    sum += sumTheTreeValues(root.right)
  }
  return sum
}
console.log(sumTheTreeValues(simpleNode))

console.log('----------------------------Task:512 "Object depth"----------------------------')
function depth(obj, d = 0, arr = []) {
  if(typeof obj !== 'object' || obj === null){
    return 0
  }
  if(typeof obj === 'object' && obj.length != 0 && Object.keys(obj).length != 0){
    if(!Array.isArray(obj)){
      d++
      arr.push(d)
    }
    for(let el in obj){
      depth(obj[el], d, arr)
    }
  }
  return Math.max(...arr, 0)
}
console.log(depth(['a', ['b', {c : 22}]]))

console.log('----------------------------Task:513 "Tree Depth"----------------------------')
function recordDepth(tree, depth = 0) {
  if(typeof tree !== 'object' || tree === null){
    return null
  }
  if(typeof tree === 'object' && tree.length == 0 && Object.keys(tree).length == 0){
    return null
  }
  tree.depth = depth
  for(let val in tree){
    recordDepth(tree[val], depth + 1)
  }
  return tree
}
console.log(recordDepth(null))

console.log('----------------------------Task:514 "Ackermann Function"----------------------------')
//Я тупо переписал описание задачи в код
Ackermann = function(m,n) {
  if(m == 0){
    return n + 1
  }
  if(m > 0 && n == 0){
    return Ackermann(m - 1, 1)
  }
  if (m > 0 && n > 0){
    return Ackermann(m-1, Ackermann(m, n-1))  
  }
}
console.log(Ackermann(4,0))

console.log('----------------------------Task:518 "Reverse linked list"----------------------------')
//Тесты проходит, в решении: Превышен максимальный размер стэка вызовов
function reverseList(list, arr = []) {
  if(list === null){
    return null
  }
  if(list.length === 0){ //На случай если в аргументы приходит []
    if(arr.length === 0){ //На случай если в первом вызове сразу пустой массив
      return null
    }
    return arr
  }
  let [val, tail] = list
  let newArr = [val, arr]
  if(arr.length === 0){ //Рефакторинг?
    newArr = [val, null]
  }
  if(tail === null){
    return newArr
  }
  return reverseList(tail, newArr)
}
console.log(reverseList([1, [2, [3, null]]])) 
console.log(reverseList(null)) 
console.log(reverseList([null, []])) 
console.log(reverseList([])) 

console.log('----------------------------Task:525 "Fibonacci"----------------------------')
function fibonacci(n){
  if(n <= 1){
    return n
  }else{
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
};
console.log(fibonacci(5))

console.log('----------------------------Task:524 "Halving Sum"----------------------------')
function halvingSum(n) {
  if(n === 1){
    return n
  }
  return n + halvingSum(Math.floor(n / 2))
}
console.log(halvingSum(25))

console.log('----------------------------Task:523 "Greatest common divisor"----------------------------')
function mygcd(x,y){
  if(x % y === 0){
    return y
  } 
  return mygcd(y, x % y)
}
console.log(mygcd(30, 12))

console.log('----------------------------Task:522 "Sum squares"----------------------------')
function SumSquares(l){
  return l.reduce((a, b) => {
    if(Array.isArray(b)){
      return a + SumSquares(b)
    }
    return a + b**2
  }, 0)
}
console.log(SumSquares([10,[[10],10],[10]]))


console.log('----------------------------Task:521 "File Finder"----------------------------')
let files = {
  'one': {
    'one2': {}
  },
  'two': {
    'two2': {
      'funnyjoke.txt': 'lol i pranked you!!!'
    }
  },
  'three': {}
};
//Изначально я написал так
function search(files, path = []) {
  if (typeof files === 'string'){
    return path.join('/')
  }
  //Но так не сработало потому что пробегается только по первой ветке
  for(let folder in files){
    return search(files[folder], [...path, folder]); 
  }
}
//В решении увидел это
//Как это работает???
function search(files, path = []) {
  if (typeof files === 'string')
    return path.join('/')
  for(let folder in files){
    try {
      return search(files[folder], [...path, folder]);
    }
    catch(e) {}
  }
  throw new Error('No files!');
}
//Решил так
function search(files) {
  function two(files, path = []){
    if(typeof files !== 'object'){
      return path.join('/')
    }
    let res;
    for(let folder in files){
      let temp = two(files[folder], [...path, folder])
      if(temp){
        res = temp
      }
    }
    return res
  }
  if(!two(files)){
    throw new Error('No files!');
  } else{
    return two(files)
  }
}
console.log(search(files))

console.log('----------------------------Task:520 "Nested List Depth"----------------------------')
function arrayDepth(array, deep = 1, arrOfDeeps = []) {
	if(Array.isArray(array)){
    arrOfDeeps.push(deep)
    for(let el of array){
      arrayDepth(el, deep + 1, arrOfDeeps)
    }
  }
  return Math.max(...arrOfDeeps)
}
console.log(arrayDepth([]))