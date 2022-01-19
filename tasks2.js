console.log('----------------------------ДЗ на 19.01.22----------------------------')
console.log('----------------------------Task 203----------------------------')
const whosOnline = (friends) => {
  const result = {}
  for(const { status, lastActivity, username } of friends){
    let key = status
    if (status === 'online' && lastActivity > 10) {
      key = 'away'
    }
    if(!result.hasOwnProperty(key)){
      result[key] = []
    }
    result[key].push(username)
  }
  return result
}
console.log(whosOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }]))


  
console.log('----------------------------Task 204----------------------------')
//Ответ CODEWARS: should test for something

function anagrams(word, words) {
  return words.filter(el => isAnagrams(word, el))
}

function isAnagrams(a, b) {
  return isEqual(wordToObject(a), wordToObject(b));
}


console.log(anagrams('abba', ['ara', 'abab', 'baba']))

//wordToObject(word) принимает слово(string) и возвращает объект.
//Ключи объекта - это символы из которых состоит слово, 
//Значение каждого ключа - это количество повторений символа в слове
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
//isEqual(obj1, obj2) сравнивает два объекта, если ключи объектов и их значения одинаковые - возвращает true
// Object.getOwnPropertyNames([]) === ["length"]
// Object.keys()  
function isEqual(obj1, obj2){
  const obj1Keys = Object.getOwnPropertyNames(obj1)
  const obj2Keys = Object.getOwnPropertyNames(obj2)
  if(obj1Keys.length !== obj2Keys.length) return false 

  // for(const key of obj1Keys){
  //   if(obj1[key] !== obj2[key]){
  //     return false
  //   }
  // }
  // return true

  return obj1Keys.every(el => obj1[el] === obj2[el])
}

console.log('----------------------------Task 205----------------------------')
function arithmetic(a, b, operator){
  return pairs[operator](a, b)
  //return eval(a + pairsEval[operator] + b)
}
const pairs = {
  add: (a,b)=> a + b,
  subtract: (a, b) =>  a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
}
const pairsEval = {
  add : "+", 
  subtract : "-", 
  divide : "/",
  multiply : "*"
}

/* Что это за конструкция???
const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);
*/
console.log(arithmetic(2,3, 'divide'))


console.log('----------------------------Task 206----------------------------')
function pluck(objs, name) {
  /*let result = []
  for(let i = 0; i < objs.length; i++){
    objs[i].hasOwnProperty(name) ? result.push(objs[i][name]) : result.push(undefined)
  }
  return result
  */
  return objs.map(el => el[name])
}
console.log( 
  pluck(
    [
      {a:1}, 
      {a:2}, 
      {a:3, b:9},
      {b:6}
    ], 
    'a'
  ) 
)

console.log('----------------------------Task 207----------------------------')
function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
  /*
  let obj = {}
  s.split(' ').forEach(el => {
    obj[el] = el
  })
  return Object.keys(obj).join(' ')
  */
}
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))




console.log('----------------------------Task 209----------------------------')
function greetDevelopers(list) {
  return list.map(el => ({
    ...el,
    greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`,
  }));
  
  // let list2 = []
  // for(const el of list){
  //   list2.push({...el, greeting : `Hi ${el.firstName}, what do you like the most about ${el.language}?`})
  // }
  // return list2
}
const list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
console.log(greetDevelopers(list1))
console.log(list1);


console.log('----------------------------Task 208----------------------------')
function findUnique(numbers) {

  //Вариант 1 - Execution Timed Out (12000 ms) - O( N * 2N)
  //return +numbers.filter( el => numbers.indexOf(el) === numbers.lastIndexOf(el)) 

  //Вариант 2
  /*
  //Получаем уникальные значения
  let uniques = [...new Set(numbers)]
  //Входящий массив - уникальные значения = дубликаты (только те значения которые дублируются)
  let duplicates = numbers;
  uniques.forEach(el => duplicates.splice( duplicates.indexOf(el), 1))
  //Уникальные значения отфильтровать от дубликатов = уникальное значение
  return +uniques.filter(el => !duplicates.includes(el))
  */

  //Вариант 3
  
  // N = 1_000_000_000
  const obj = {}
  numbers.forEach(el => obj.hasOwnProperty(el) ? ( obj[el]++ ) : ( obj[el] = 0 )) // O(N)
  for(const key in obj) { // O(N/2)
    if (obj[+key] === 0) {
      return +key;
    }
  }
  return +numbers.filter(el => obj[el] === 0) // O(N)

  //Разобрать !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //return numbers.reduce((a, b) => a ^ b);


  //  5 === 0101
  // 10 === 1010

  // 5^10 === 1111 === 15


  // 5 ^ 5 === 0
  // 0 ^ 123 === 123

  // 8 

  // 3 & 6
  // 8 | 12

  //Вариант 4
  let set = new Set();
  numbers.forEach(el => set.has(el) ? set.delete(el) : set.add(el))
  return +[...set]
}
console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]))



console.log('----------------------------Task 210----------------------------')
function convertHashToArray(hash){
  return Object.entries(hash).sort((a, b) => a[0] < b[0] ? -1 : 1);
  return Object.keys(hash).sort().map(key => [key, hash[key]]);
  // return result.sort( (a,b) => {
  //   if(a[0] < b[0]){
  //     return -1
  //   } 
  //   if(a[0] > b[0]){
  //     return 1
  //   }
  //   return 0
  // })
}
console.log(convertHashToArray({name: 'Aeremy', age: 24, role: 'Boftware Engineer'}))

console.log(['a,b,c,d', 'a,b,c'].sort())

const o = {
  'a,b,c,d': 'asdfghj',
  'a,b,c': 'qwertyui',
};
//[ [ 'a,b,c,d', 'asdfghj' ], [ 'a,b,c', 'qwertyui' ] ]
//[ 'a,b,c,d,asdfghj', 'a,b,c,qwertyui' ]
console.log(convertHashToArray(o));


console.log('----------------------------Task 211----------------------------')
/*
function abbreviate(string) {
 return string.split(' ').map(str => {
    if(str.length < 4){
      return str
    }
    if(str.indexOf('-') !== -1){
      return str.split('-').map(el => toAbbreviate(el)).join('-')
    }
    return toAbbreviate(str)
  }).join(' ')
}

function toAbbreviate(word){
  let punctuation = ''
  if(/[^\w]/g.test(word.substr(-1))){
    punctuation = word.substr(-1)
    word = word.slice(0, (word.length - 1) )
  }
  let mid = word.length - 2;
  let first = word.substr(0, 1)
  let last = word.substr(-1)
  return (first + mid + last + punctuation)
}
*/

function abbreviate(string) {
  return string.replace(/\w{4,}/g, x => {
    return x[0] + (x.length - 2) + x[x.length - 1];
    return x[0] + (x.length - 2) + x.at(-1);
  })
}
console.log(abbreviate("You need, need not want, to complete this code-wars mission!"))



console.log('----------------------------Task 212----------------------------')
function isValidIP(str) {
  let regexp = /^(0\.|[1-9]\d{0,2}\.){3}(0|[1-9]\d{0,2})$/
  return regexp.test(str) && str.split('.').every(el => el < 256);


console.log(isValidIP('12.255.56.1'))