console.log('----------------------------Task:XXX "Binary Search"----------------------------')
function binarySearch(arr, item, low = 0, hight = arr.length - 1){
  let mid = low + Math.floor((hight - low) / 2)
  if(low > hight){
    return 'Такого значения в массиве нет!'
  }
  if(arr[mid] < item){
    return binarySearch(arr, item, mid + 1, hight)
  }
  if(arr[mid] > item){
    return binarySearch(arr, item, low, mid - 1)
  }
  if(arr[mid] === item){
    return mid
  }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 12))

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
/*
function sumTheTreeValues(root){
  if(root !== null){
    return 0;
  }
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
}
console.log(sumTheTreeValues(simpleNode))
console.log(sumTheTreeValues(null))
*/
/*console.log('----------------------------Task:512 "Object depth"----------------------------')

function depth(obj) {
  const isObject = val => typeof val === "object" && obj !== null && !Array.isArray(val);
  if(!isObject(obj)){
    return 0
  }

  // let max = 0;
  // for(const el in obj){
  //   max = Math.max(max, depth(obj[el]))
  // }

  // return max + 1;

  return Math.max(...Object.values(obj).map(depth)) + 1;
}
console.log(depth(['a', ['b', {c : 22}]]))

console.log('----------------------------Task:513 "Tree Depth"----------------------------')
function recordDepth(tree, depth = 0) {
  const isObject = val => typeof val === "object" && obj !== null && !Array.isArray(val);

  if(!isObject(tree)){
    return null
  }
  if(Object.keys(tree).length === 0){
    return null
  }
  tree.depth = depth
  for(const key in tree){
    recordDepth(tree[key], depth + 1)
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
function reverseList(list, arr = null) {
  if(list === null){
    return arr
  }

  let [val, tail] = list
  let newArr = [val, arr]
  return reverseList(tail, newArr)
}
console.log(reverseList([1, [2, [3, null]]])) 
console.log(reverseList(null)) 
console.log(reverseList([7, null])) 
console.log(reverseList([5, [5, [5, [5, null]]]])) 
console.log(reverseList(null)) 

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
*/
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
function two(files, path = []){
  if(typeof files !== 'object'){
    return path.join('/')
  }
  for(const folder in files){
    const temp = two(files[folder], [...path, folder])
    if(temp){
      return temp;
    }
  }
}

function search(files) {
  const result = two(files)
  if(!result){
    throw new Error('No files!');
  }
  return result;
}
console.log(search(files))

console.log('----------------------------Task:520 "Nested List Depth"----------------------------')
function arrayDepth(array) {
  if(!Array.isArray(array)){
    return 0;
  }
  let max = 0
  for(let el of array){
    max = Math.max(max, arrayDepth(el))
  }
  return max + 1
}
//console.log(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]))
console.log(arrayDepth([1, [2, [3]]]))

console.log('----------------------------Task:517 "Deep comparison of objects"----------------------------')
//Перерефактори на return, а не arr.push()
const obj1 = {
  ara : 2,
  bara : {
    ggg : 3,
    vvv : 6
  }
}
const obj2 = {
  ara : 2,
  bara : {
    ggg : 3,
    vvv : 6
  }
}
function deepCompare(o1, o2, arr = []) {
  if(o1 === null || o2 === null){
    arr.push(o1 === o2)
  }
  if(typeof o1 !== 'object' && typeof o2 !== 'object'){
    arr.push(o1 === o2)
  }
  if(typeof o1 === 'object' && typeof o2 === 'object' && o1 !== null && o2 !== null){
    //Если это массивы
    if(Array.isArray(o1) && Array.isArray(o2)){
      if(o1.length !== o2.length){
        arr.push(false)
      }
      if(o1.length === 0 && o2.length === 0){
        arr.push(true)
      }
    }
    //Если это объекты
    if(!Array.isArray(o1) && !Array.isArray(o2)){
      if(Object.keys(o1).length !== Object.keys(o2).length){
        arr.push(false)
      }
      if(Object.keys(o1).length === 0 && Object.keys(o2).length === 0){
        arr.push(true)
      }
    }
    //Если это массив и объект
    if(!Array.isArray(o1) && Array.isArray(o2)){
      arr.push(false)
    }
    for(let el in o1){
      deepCompare(o1[el], o2[el], arr)
    }
  }
  if(typeof o1 !== 'object' && typeof o2 !== 'object'){
    arr.push(o1 === o2)
  }
  return !arr.includes(false)
};
console.log(deepCompare({}, {}))


console.log('----------------------------Task:516 "Fun with trees: max sum"----------------------------')
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));

console.log(root);
const ara= 
[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]