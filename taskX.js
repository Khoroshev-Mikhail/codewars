console.log('----------------------------Task:512 "Object depth"----------------------------')
//Проходит тесты, но не решение
//UPD: Надо найти максимальную глубину массива
function depth(obj, depth = 0, arr = []) {
  let newDepth = depth
  if(typeof obj === 'object'){
    newDepth++
    arr.push(newDepth)
    for(let el in obj){
      console.log(obj[el])
    }
  }
  return arr
}

console.log(depth({a: 1, b: {c: 2}}))
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

















