let arr =[
    ["E","A","R","A"],
    ["N","L","E","C"],
    ["I","A","I","S"],
    ["B","Y","O","R"]
  ];

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
//ЕСТЬ ПРОБЛЕМА ЕСЛИ ВЫЗОВ ФУНКЦИИ НЕ ПРОЙДЕТ ДО КОНЦА, КООРДИНАТЫ ВСЁРАВНО ЗАПИШУТСЯ
let ggg = coordinates(3, 1, arr)
let last =[[2, 2], [3, 0]]

function BGW(grid, str, x, y, hits = []){
    
}
