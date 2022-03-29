console.log('----------------------------Task:516 "Fun with trees: max sum"----------------------------')
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));

function maxSum(root, accum = 0) {
  if(root === null){
    return 0
  }
  if(!root.left && !root.right){
    return accum + root.value
  }
  if(!root.left ){
    return Math.max(maxSum(root.right, accum + root.value), 0)
  }
  if(!root.right){
    return Math.max(0, maxSum(root.left, accum + root.value))
  }
  return Math.max(maxSum(root.right, accum + root.value), maxSum(root.left, accum + root.value))
}

//Почему это сработало?? Как js понимает, что нужно сравнивать свойство .value ???
function maxSum(root) {
    if (!root) return 0;
    return root.value + Math.max(maxSum(root.left), maxSum(root.right))
}




console.log('----------------------------Task:510 "Boggle Word Checker"----------------------------')
let arr =[
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

//Функция возвращает возможные координаты для след.символа
function coordinates(y, x, grid, lastHits){
    let arr = [
        [y - 1, x - 1], [y - 1, x], [y - 1, x + 1],
        [y, x - 1], /*[y, x]*/, [y, x + 1],
        [y + 1, x - 1], [y + 1, x], [y + 1, x + 1],
    ]
    //Координаты - это индексы многомерного массива, они не могут быть меньше 0 и больше его длины
    const endY = grid.length
    const endX = grid[0].length
    let filtred = arr.filter(el => 
        el[0] >= 0 && 
        el[0] < endY && 
        el[1] >= 0 && 
        el[1] < endX
        )
    //Так же фильтруем координаты тех символов по которым уже пробегалась функция
    const newLastHits = lastHits.map(el => el.join(''))
    return filtred.filter(el => {
      return !newLastHits.includes(el.join(''))
    })
    //ну или как удалить (отфильтровать) значения массива которые присутствуют в другом МНОГОМЕРНОМ массиве???

}

function BGW(grid, str, y, x, hits = [], result = []){
    let symbol = str.charAt(0)
    let arr = coordinates(y, x, grid, hits)
    //console.log(symbol)
    //console.log(arr)
    for(let i = 0; i < arr.length; i++){
        let [nextY, nextX] = arr[i]
        if(grid[nextY][nextX] === symbol){
          //console.log(`Найденные координаты для ${symbol} = ${nextY} - ${nextX}`)
          if(str.length === 1){
            result.push(true)
          }
          hits.push([nextY, nextX])
          BGW(grid, str.substring(1), nextY, nextX, hits, result)
        }
    }
    return result.some(el => el === true)
}
function checkWord(grid, word) {
  let res = []
  const first = word.charAt(0)
  for(let i = 0; i < grid.length; i++){
    for(let k = 0; k < grid.length; k++){
      if(grid[i][k] === first){
        if(word.length === 1){
          return true
        }
        res.push(BGW(grid, word.substring(1), i, k))
        console.log('---------------'+i+''+k)
        BGW(grid, word.substring(1), i, k)
      }
    }
  }
  return res.some(el => el === true)
}
let test = [
  ['N','B','R','A'],
  ['C','R','P','A'],
  ['L','A','A','P'],
  ['S','O','A','A']
]
console.log(checkWord(test, "PARAPARAS"))