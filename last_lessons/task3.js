console.log('----------------------------ДЗ на 26.01.22----------------------------')
console.log('----------------------------Task 215----------------------------')
function incrementString (strng) {
  // return strng.replace(/(0*)([1-9]*)$/, (_, zeros, number) => {
  //   let newNumber = Number(number) + 1
  //   if(zeros !== '' && number.length !== String(newNumber).length){
  //     zeros = zeros.slice(0, -1)
  //   }
  //   return zeros + newNumber
  // })
  return strng.replace(/[0-9]*$/, number => {
    const newNumber = Number(number) + 1
    return String(newNumber).padStart(number.length, "0");
  });
}

console.log(incrementString("foobar00999"))



console.log('----------------------------Task 211----------------------------')
function kebabize(str) {
  return str
  .replace(/[A-Z]/g, x=> '-' + x.toLowerCase())
  .replace(/\d/g, '')
  .replace(/^-/, '')
}
console.log(kebabize('camelsHave3Thr3eeHumps'))



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

// [[1, 3], [2, 4], [10, 2], [12, 1]]
function frequency(arr, options = {}) {
  const obj = new Map();
  const {
    criteria = x => x,
    compareTo = (v1, v2) => v1 < v2 ? -1 : 1,
  } = options;
  for(const el of arr){
    const key = criteria(el);
    if (!obj.has(key)) {
      obj.set(key, 0)
    }
    obj.set(key, obj.get(key) + 1)
  }
  return Array.from(obj)
    .sort((a, b) => compareTo(a[0], b[0], a[1], b[1]))
}

//console.log( frequency(  persons, {criteria: profession, compareTo: frequencyCompare}  ) )
console.log( frequency(  [1, 10, 12, 2, 1, 10, 2, 2, 1, 2], frequencyCompare  ) )
//Ожидается : [[1, 3], [2, 4], [10, 2], [12, 1]]
//Возвращает : [ [ '1', 3 ], [ '10', 2 ], [ '12', 1 ], [ '2', 4 ] ] т.е. ключи = преобразовались в строки, а должны быть цифрами

//console.log( frequency(  persons, {criteria: profession, compareTo: frequencyCompare}  ))
//Ожидается: [["scientific", 3], ["teacher", 2], ["politician", 1]]
//Возвращает: [ [ 'teacher', 2 ], [ 'scientific', 3 ], [ 'politician', 1 ] ]



console.log('----------------------------Task 216----------------------------')
function findPair(arr1,arr2){
  //Создаём массив с парами значений 
  const pairs = arr1.map((_, i) => [arr1[i], arr2[i]])
  // for(let key in arr1){
  //   pairs.push([ arr1[key], arr2[key] ])
  // 
  //Массив сум всех подмассивов
  // const sumOfPairs = pairs.map(el => el.reduce( (a, b) => a + b) )
  const sumOfPairs = pairs.map(([a, b]) => a + b);
  //Массив всех повторяющихся сум
  //const repitingSum = sumOfPairs.filter(el => sumOfPairs.indexOf(el) !== sumOfPairs.lastIndexOf(el))
  const obj = {}
  for(const sum of sumOfPairs){
    if(!obj.hasOwnProperty(sum)){
      obj[sum] = 0
    } 
    obj[sum]++
  }
  // https://github.com/tc39/proposal-array-grouping
  const countOfPopularSum = Math.max(...Object.values(obj))
  if(countOfPopularSum === 1){
    return []
  }


  const maxSum = Math.max(...Object.keys(obj).filter(el => obj[el] === countOfPopularSum))
  //Возвращаем те пары сумма которых = самой часто встречающейся сумме значений
  return pairs.filter(([a, b]) => a + b === maxSum)
}

console.log(findPair([11,740,814,271,1471,0,286,1010,-488,1082,879,281,1775,-765,644,1672,-426,451,-230,136,1413,326,-342,728,195,1314,-102,-517],
  [433,1212,-370,173,481,444,158,942,417,-638,-49,-147,177,1209,1308,280,-684,379,674,1816,539,679,5,1137,249,1109,546,961]))

console.log('----------------------------Task 217----------------------------')
function calculate(expression) {
  const regexp = /([\*\+\-\/])[\s\n](\-*\d+\.*\d*)[\s\n](\-*\d+\.*\d*)/;
  while(regexp.test(expression)){
    expression = expression.replace(regexp, (str, p1, p2, p3) => {
      return choiceOperator(p2, p1, p3)
    })
  }
  return +expression.trim()
}
//Вместо Eval
function choiceOperator(p2, p1, p3) {
  p2 = Number(p2)
  p3 = Number(p3)
  switch(p1){
    case '/':
      return p2 / p3;
    case '*':
      return p2 * p3;
    case '-':
      return p2 - p3;
    case '+':
      return p2 + p3;
  }
}

// / + 3 5 * 2 2

// 2 for обратный


console.log(calculate('/ + 3 5 * 2 2'))


//console.log(calculate('+ 504004.9748443216e+21 4.6257758916450324'))
//console.log(calculate('- 0.4970828104395045 / -53554231107236880 - 587871.2760567085 -465019.0035653822'))


  

console.log('----------------------------Task 218----------------------------')
function hexStringToRGB(hexString) {
  /*const rgb = {}
  hexString.replace(/#/, '').replace(/([\d\w][\d\w])([\d\w][\d\w])([\d\w][\d\w])/, (str, red, green ,blue) => {
    rgb.r = parseInt(red, 16)
    rgb.g = parseInt(green, 16)
    rgb.b = parseInt(blue, 16)
    return str
  })
  return rgb
  */
  const [r, g, b] = hexString.match(/\w{2}/g).map(el => parseInt(el, 16))
  return {r, g, b}
}
console.log(hexStringToRGB('#FF9933'))

/* 
Что за формулировка? 
function hexStringToRGB(hex) {
  hex = parseInt(hex.substring(1), 16)
  // 65280 
  return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)}
}
*/
function maskify(cc) {
  return ('#'.repeat(cc.length - 4) + cc.slice(-4))
}
console.log(maskify('444444444'))