console.log('----------------------------ДЗ на 26.01.22----------------------------')
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



console.log('----------------------------Task 211----------------------------')
function kebabize(str) {
  return str
  .replace(/([A-Z])(\d*)/g, x=> '-' + x.toLowerCase())
  .replace(/\d/g, '')
  .replace(/^-/, '')
}
console.log(kebabize('camelsHaveThreeHumps'))



console.log('----------------------------Task 214----------------------------')

//Функции и объект из условия задачи:
function alphabeticalCompare(value1, value2) {
  if (String(value1) < String(value2)) {
    return -1;
  } else if (String(value1) > String(value2)) {
    return 1;
  } else {
    return 0;
  }
}
function frequencyCompare(value1, value2, freq1, freq2) {
  //console.log('val1=' + value1 + 'val1=' + value2 + 'fr1=' + freq1 +'fr2=' + freq2)
  return freq2 - freq1;
}
function id(value) {
  return value;
}
function isEven(number) {
  return number % 2 === 0;
}
function parity(number) {
  return isEven(number) ? 'even' : 'odd';
}
function profession(person) {
  return person.profession;
}
var persons = [
  {name: 'Peter', profession: 'teacher'},
  {name: 'Michael', profession: 'teacher'},
  {name: 'Anna', profession: 'scientific'},
  {name: 'Rose', profession: 'scientific'},
  {name: 'Anna', profession: 'scientific'},
  {name: 'Anna', profession: 'politician'}
];

//Мои функции:
function countOfEntries(arr, options = false){
  let obj = {}
  for(let el of arr){
    if(options.criteria) {
      el = options.criteria(el)
    }
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 0;
    }
    obj[el]++;
  }
  return Object.entries(obj)
}

function frequency(arr, options = {}) {
  return countOfEntries(arr, options).sort(options.compareTo)
}

//console.log( frequency(  persons, {criteria: profession, compareTo: frequencyCompare}  ) )
console.log( frequency(  [1, 10, 12, 2, 1, 10, 2, 2, 1, 2]  ) )
//Ожидается : [[1, 3], [2, 4], [10, 2], [12, 1]]
//Возвращает : [ [ '1', 3 ], [ '10', 2 ], [ '12', 1 ], [ '2', 4 ] ] т.е. ключи = преобразовались в строки, а должны быть цифрами

//console.log( frequency(  persons, {criteria: profession, compareTo: frequencyCompare}  ))
//Ожидается: [["scientific", 3], ["teacher", 2], ["politician", 1]]
//Возвращает: [ [ 'teacher', 2 ], [ 'scientific', 3 ], [ 'politician', 1 ] ]



console.log('----------------------------Task 216----------------------------')
function findPair(arr1,arr2){
  //Создаём массив с парами значений 
  const pairs = []
  for(let key in arr1){
    pairs.push([ arr1[key], arr2[key] ])
  }
  //Массив сум всех подмассивов
  const sumOfPairs = pairs.map(el => el.reduce( (a, b) => a + b) )
  //Массив всех повторяющихся сум
  const repitingSum = sumOfPairs.filter(el => sumOfPairs.indexOf(el) !== sumOfPairs.lastIndexOf(el))
  //Самая часто встречающаяся сумма пар
  const popularSum = countOfEntries(repitingSum).reduce( (a,b) =>{ a[1] > b[1]
    if(a[1] > b[1]){
      return a
    } else {
      return b
    }
  }, [0, 0])
  //Возвращаем те пары сумма которых = самой часто встречающейся сумме значений
  return pairs.filter(el => (el[0] + el[1]) === +popularSum[0])
}

console.log(findPair([11,740,814,271,1471,0,286,1010,-488,1082,879,281,1775,-765,644,1672,-426,451,-230,136,1413,326,-342,728,195,1314,-102,-517],
  [433,1212,-370,173,481,444,158,942,417,-638,-49,-147,177,1209,1308,280,-684,379,674,1816,539,679,5,1137,249,1109,546,961]))