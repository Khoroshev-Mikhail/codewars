console.log('----------------------------Task:518 "Reverse linked list"----------------------------')
function reverseList(list, arr = []) {
  if(list == null){
    return 0
  }
  arr.push(list[0])
  if(list[1] === null){
    let temporary = null
    for(let i = 0; i < arr.length ; i++){
      let val = arr[i];
      let tail = temporary
      temporary = [val, tail]
    }
    return temporary
  }
  return reverseList(list[1], arr) //[3, [2, [1, null]]]
}
console.log(reverseList([1, [2, [3, null]]]))
/*
function two(list){
  let temporary = null
  for(let i = 0; i < list.length ; i++){
    let val = list[i];
    let tail = temporary
    temporary = [val, tail]
  }
  return temporary
}
console.log(two(reverseList([1, [2, [3, null]]])))
/*
/*
console.log('----------------------------Task:506 "Flatten a Nested Map"----------------------------')
function combos(x, i = 8){
  //1 1 1 1 1 1 1 1 1 1
  //2 1 1 1 1 1 1 1 1
  //2 2 1 1 1 1 1 1
  //2 2 2 2 2
  //3 2 2 2 1
  //3 3 2 2 2
  //3 3 3 1
  let arr = [...x] 
  let min = Math.min(...arr)
  let index = arr.indexOf(min) //Находим первый индекс = минимальному элементу
  arr[index]++ //Увеличиваем этот элемент на 1
  let part = arr.slice(0, index + 1); //Вырезаем массив с 0 до этого элемента включительно
  while(part.reduce((a, b) => a+ b, 0) < i){
    let sum = part.reduce((a, b) => a+ b, 0)
    if(sum + min >= i){
      min = i - sum
    }
    part.push(min)
  }
  return part
}

let b = [3, 2, 1, 1]
console.log(combos(b))

*/

















