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
 /* const regexp = /(0*)([1-9]*)$/
  if(! regexp.test(strng)){
    return strng + 1
  }
  const num = strng.match(regexp)
  const count = +num[2] + 1
  let zeros = num[1]
  const str = strng.substr(0, num.index)
  if(num[2].length !== String(count).length){
    zeros = zeros.substr(0, zeros.length-1)
  }
  return str + zeros + count*/

  return strng.replace(/(0*)([1-9]*)$/, (_, zeros, number) => {
    let newNumber = Number(number) + 1
    if(zeros !== '' && number.length !== String(newNumber).length){
      zeros = zeros.slice(0, -1)
    }
    return zeros + newNumber
  })
}

console.log(incrementString("foobar00999"))



console.log('----------------------------Task 215----------------------------')
function kebabize(str) {
  return str
  .replace(/([A-Z])(\d*)/g, x=> '-' + x.toLowerCase())
  .replace(/\d/g, '')
  .replace(/^-/, '')
}
console.log(kebabize('camelsHaveThreeHumps'))