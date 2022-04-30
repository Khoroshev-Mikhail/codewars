
//https://www.codewars.com/kata/6161847f52747c0025d0349a/solutions/javascript
const createNDimensionalArray = (n, size, k = n) => {
    if(n === 1){
        return new Array(size).fill(`level ${k}`) 
    }
    return new Array(size).fill(createNDimensionalArray(n - 1, size, k))
  }
