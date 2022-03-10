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

console.log(depth(['a', 'b', {g:22}]))
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

















