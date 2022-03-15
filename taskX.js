console.log('----------------------------Task:518 "Reverse linked list"----------------------------')
/*function reverseList(list, arr = []) {
  console.log(list)
  if(list === null){
    return null
  }
  let [val, tail] = list
  let newArr = []
  if(tail === null){
    newArr = [val, arr]
    return newArr
  }
  if(arr.length === 0){
    newArr = [val, null]
  }else{
    newArr = [val, arr]
  }
  return reverseList(tail, newArr)
}*/
function reverseList(list, arr = []) {
  if(list === null){
    return null
  }
  if(list.length === 0){
    return arr
  }
  let [val, tail] = list
  let newArr = [val, arr]
  if(arr.length === 0){
    newArr = [val, null]
  }
  if(tail === null){
    return newArr
  }
  return reverseList(tail, newArr)
}

console.log(reverseList([ null, [] ]))  
//[ null, [] ] === [ null, null ]
/*
Если list == null
*/


















