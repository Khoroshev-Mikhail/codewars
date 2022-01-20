console.log('----------------------------ДЗ на 26.01.22----------------------------')
console.log('----------------------------Task 214----------------------------')
function wordToObject(word){
    const obj = {}
    for(const el of word) {
      if (!obj.hasOwnProperty(el)) {
        obj[el] = 0;
      }
      obj[el]++;
    }
    return obj
  }
  
function frequency(arr, operator) {
    return Object.entries(arr)
}
console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2]))


console.log('----------------------------Task 215----------------------------')
function incrementString (strng) {
  const regexp = /(0+)([1-9]+)$/
  const num = strng.match(regexp)
  const count = +num[2] + 1
  let zeros = num[1]
  const str = strng.substr(0, num.index)
  if(num[2].length !== String(count).length){
    zeros = zeros.substr(0, zeros.length-1)
  }
  return str + zeros + count
}

console.log(incrementString("foobar00999"))

