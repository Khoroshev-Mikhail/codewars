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
/*let arr =[
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];
*/
//Функция возвращает возможные координаты для след.символа
function coordinates(y, x, grid, lastHits){
    //Координаты - это индексы многомерного массива, они не могут быть меньше 0 и больше его длины
    //ну или как удалить (отфильтровать) значения массива которые присутствуют в другом МНОГОМЕРНОМ массиве???
    
}

function BGW(grid, str, y, x, hits = []){
  //Вместо push & pop буквы заменять на ' ' и обратно
    if (str === "") {
        return true;
    }

    const endY = grid.length
    const endX = grid[0].length
    if (!(y >= 0 && y < endY && x >= 0 && x < endX)) {
        return false;
    }
    if(hits.some(hit => hit[0] === y && hit[1] === x)) {
        return false;
    }
    if(grid[y][x] !== str[0]){
        return false;
    }
    
    hits.push([y, x])
    
    const arr = [
        [y - 1, x - 1], [y - 1, x], [y - 1, x + 1],
        [y, x - 1], /*[y, x], */ [y, x + 1],
        [y + 1, x - 1], [y + 1, x], [y + 1, x + 1],
    ];

    for(const [nextY, nextX] of arr) {
        if (BGW(grid, str.substring(1), nextY, nextX, hits)) {
            hits.pop([y, x])
            return true;
        }
    }
    hits.pop([y, x])
    return false;
}
function checkWord(grid, word) {
  for(let i = 0; i < grid.length; i++){
    for(let k = 0; k < grid.length; k++){
      if(BGW(grid, word, i, k)){
        return true;
      }
    }
  }
  return false;
}
// let test = [
//   ['N','B','R','A'],
//   ['C','R','P','A'],
//   ['L','A','A','P'],
//   ['S','O','A','A']
// ]
// let test = [
//   ['N','B','R','O'],
//   ['C','R','P','O'],
//   ['L','A','T','A'],
//   ['S','O','X','O']
// ]
// console.log(checkWord(test, "PARAPARAS"))
var testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];
console.log(checkWord(testBoard, "RSCAREIOYBAILNEA")) 
// console.log(BGW(testBoard, "EAINEA", 1, 2)) 
// console.log(checkWord(testBoard, "EAINEA")) 



//BAILER - true
//"Must be able to check indefinite word lengths going in all directions"

/*
combos(3) => [ [ 3 ], [ 1, 1, 1 ], [ 1, 2 ], [2, 1] ]
*/

combos(3)
 []