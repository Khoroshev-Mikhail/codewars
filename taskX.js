console.log('----------------------------Task:514 "Ackermann Function"----------------------------')
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

















