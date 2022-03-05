console.log('----------------------------Task:506 "Flatten a Nested Map"----------------------------')
let result = []
function combos(x, i = 4){
  let arr = [...x]
  let el = Math.min(...arr)
  let index = arr.indexOf(el)
  arr[index]++
  let res = arr.slice(0, index + 1);
  let last = res[res.length-1]
  while(res.reduce((a, b) => a + b, 0) <= 8){
    res.push(last)
  }
  result.push(arr)
  return res
}

console.log(combos([4, 1, 1, 1, 1, 1, 1]))




















