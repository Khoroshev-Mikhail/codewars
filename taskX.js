console.log('----------------------------Task:227 "Sorting by bits"----------------------------')
function countOfBits(x) {
  const length = Math.floor(Math.log2(x))
  let result = []
  for(let i = length; i >= 0; i--){
    result.push(Math.pow(2, i))
  }
  for(let i = 0; i <= length; i++){
    if( (x - result[i]) >= 0 ){
      x = x - result[i]
      result[i] = 1
    } else{
      result[i] = 0
    }
  }
  return result.filter(el => el === 1).length
}
function sortByBit(arr) {
  return arr.sort((a, b) => countOfBits(a) - countOfBits(b) || a - b)
}
console.log(sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0]))