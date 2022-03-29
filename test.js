let arr =[ 
    ["I","L","A","W"],
    ["B","N","G","E"],
    ["I","U","A","O"],
    ["A","S","R","L"] 
  ]

//Функция возвращает возможные координаты для след.символа
function coordinates(y, x, grid){
    let arr = [
        [y - 1, x - 1], [y - 1, x], [y - 1, x + 1],
        [y, x - 1], /*[y, x]*/, [y, x + 1],
        [y + 1, x - 1], [y + 1, x], [y + 1, x + 1],
    ]
    //Координаты - это индексы многомерного массива, они не могут быть меньше 0 и больше его длины
    const endY = grid.length
    const endX = grid[0].length
    return arr.filter(el => 
        el[0] >= 0 && 
        el[0] < endY && 
        el[1] >= 0 && 
        el[1] < endX
        )
}
//Функция для фильтрации символом которые уже использовались
function lastCoordinates(coordinates, lastHits){
    const newLastHits = lastHits.map(el => el.join(''))
    return coordinates.filter(el => {
        return !newLastHits.includes(el.join(''))
    })
}

function BGW(grid, str, y, x, hits = []){
    let symbol = str.charAt(0)
    let arr2 = lastCoordinates(coordinates(y, x, grid), hits)
    for(let i = 0; i < arr2.length; i++){
        let [nextY, nextX] = arr2[i]
        if(grid[nextY][nextX] === symbol){
            if(str.length === 1){
                return true
            }
            hits.push([nextY, nextX])
            return BGW(grid, str.substring(1), nextY, nextX, hits)
        }
    }
    return false
}
function checkWord(grid, word) {
    const first = word.charAt(0)
    for(let i = 0; i < grid.length; i++){
      for(let k = 0; k < grid.length; k++){
        if(grid[i][k] === first){
          return BGW(grid, word, i, k)
        }
      }
    }
  }
  console.log(checkWord(arr, 'BINGO'))