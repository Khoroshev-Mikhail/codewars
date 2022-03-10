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
//Проходит тесты, но не решение
//UPD: Надо найти максимальную глубину массива и не их сумму
function depth(obj, depth = 0) {
  /*if(obj == null || Object.keys(obj).length == 0){
    return 0
  }*/
  let arr = []
  if(typeof obj === 'object'){
    for(let val in obj){
      if(!Array.isArray(obj[val]) && typeof obj[val] === 'object'){
        let newDepth = depth + 1
        arr.push(newDepth)
        depth(obj[val], newDepth)
      }
    }
  }
  return Math.max(...arr);
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