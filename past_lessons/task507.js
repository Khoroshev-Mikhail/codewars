//MAX-2
//4111111
//421111
//42211
//4222
//MAX-3
//43111
//4321
//433

/*Функция принимает один параметр - число N (0 <= N <= 32)
Объявляем массив results = [] - куда будем пушить все слагаемые
Внутри тела функции объявляем цикл for который:
1) Пушит в results масиив current в котором первое значение = i, а остальные значения = 1, 
при этом сумма всех знач. = N
2) Вызывается функция Two(N, max = 2, current)

Функция Two(N, max = 2, arr):
1)Принимает arr и присваивает arr[1] = max, пушит arr в results
2)Принимает arr, находит первый элемент который !== max и добавляет к нему +1, 
остальные элементы заполняет = 1 пока сумма всех значений arr не станет === N
3)Если все значения кроме arr[0] равны max, вызываем two(N, max + 1, arr)
где arr[0] = N, arr[1] = max, остальные знач.заполняеются 1 пока сумма не станет = N
4)Если последний элемент arr != 1 и сумма равна N && max = N то end.
*/

// 4
// [[1,1,1,1],[1,1,2],[1,2,1],[1,3]]
// [[2,1,1],[2,2]]
// [[3,1]]
// [[4]]

// 0 => [[]]
// 1 => [[1]]
// 2 => [[1,1],[2]]
// 3 => [[1,1,1],[1,2],[2,1],[3]]

// function helper(n){
//     if(n === 0){
//         return [[]]
//     }
//     const results = []
//     for(let i = 1; i <= n; i++){
//         results.push(...helper(n - i).map(el => [i, ...el]))
//     }
//     return results
// }

// function combos(n) {
//     return helper(n).filter(el => {
//         for(let i = 1; i < el.length; i++){
//             if(el[i] < el[i - 1]){
//                 return false
//             }
//         }
//         return true
//     });
// }


function combos(n, min = 1){
    if(n === 0){
        return [[]]
    }
    const results = []
    for(let i = min; i <= n; i++){
        results.push(...combos(n - i, i).map(el => [i, ...el]))
    }
    return results
}


console.log(combos(6))
/*[
  [ 1, 1, 1, 1 ],
  [ 1, 1, 2 ],
  [ 1, 2, 1 ],
  [ 1, 3 ],
  [ 2, 1, 1 ],
  [ 2, 2 ],
  [ 3, 1 ],
  [ 4 ]
]*/

//Counting Change Combinations
//countChange(10, [5,2,3])

// с 5   : countChange(5, [5,2,3])
// без 5 : countChange(10, [2,3])
//1, [2, 3]
function countChange(n, arr){
    if(arr.length === 0){
        return 0
    }
    if(n === 0){
        return 1
    }
    if(n < 0){
        return 0
    }
    return countChange(n-arr[0], arr) + countChange(n, arr.slice(1))
}
console.log(countChange(10, [5, 2, 3]))