function curring(fn){
    function accumulator(lengthOfFn, arrayOfArgs){
        return function currentCurring(...x){
            if(lengthOfFn <= x.length){
                return fn(...arrayOfArgs, ...x)
            }
            return accumulator(lengthOfFn - x.length, [...arrayOfArgs, ...x])
        }
    }
    return accumulator(fn.length, [])
}
/*Пример
const _sum3 = (a, b, z, y = 99) => {
    return a + b + z + y
  }
let ara = curring(_sum3)
console.log(ara(1, 2)(3, 4))
*/