console.log('----------------------------ДЗ на 19.01.22----------------------------')
console.log('----------------------------Task 203----------------------------')
const whosOnline = (friends) => {
  let result = {}
  for(let man of friends){
    let status = man.status
    if (man.status === 'online' && man.lastActivity > 10) {
      status = 'away'
    }
    if( !result.hasOwnProperty(status)){
      result[status] = [man.username]
    } else {
      result[status].push(man.username)
    }
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
  let result = [];
  let objFromTheWord = wordToObject(word)
  for(let i = 0; i < words.length; i++){      
    let anagram = wordToObject(words[i])
    if( isEqual( objFromTheWord, anagram) ) result.push(words[i])
  }
  return result
}
console.log(anagrams('abba', ['ara', 'abab', 'baba']))

//wordToObject(word) принимает слово(string) и возвращает объект.
//Ключи объекта - это символы из которых состоит слово, 
//Значение каждого ключа - это количество повторений символа в слове
function wordToObject(word){
  let obj = {}
  word.split('').forEach(el => {
    obj.hasOwnProperty(el) ? ( obj[el]++ ) : ( obj[el] = 1)
  })
  return obj
}
//isEqual(obj1, obj2) сравнивает два объекта, если ключи объектов и их значения одинаковые - возвращает true
function isEqual(obj1, obj2){
  const obj1Keys = Object.getOwnPropertyNames(obj1)
  const obj2Keys = Object.getOwnPropertyNames(obj2)
  if(obj1Keys.length !== obj2Keys.length) return false 
  for(let i = 0; i < obj1Keys.length; i++){
    let key = Object.getOwnPropertyNames(obj1)[i];
    if(obj1[key] !== obj2[key]){
      return false
    }
  }
  return true
}

console.log('----------------------------Task 205----------------------------')
function arithmetic(a, b, operator){
  return pairs[operator]( a, b)
  //return eval(a + pairsEval[operator] + b)
}
const pairs = {
  add : (a,b)=>{ return a + b }, 
  subtract : (a, b) => { return a - b}, 
  divide : (a, b) => {return a / b},
  multiply : (a, b) => {return a * b}
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


console.log('----------------------------Task 208----------------------------')
function findUnique(numbers) {
  //Вариант 1 - Execution Timed Out (12000 ms) - O( N * 2N)
  //return +numbers.filter( el => numbers.indexOf(el) === numbers.lastIndexOf(el)) 
}
console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]))


console.log('----------------------------Task 209----------------------------')
function greetDevelopers(list) {
  list.forEach(el => {
    el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`
  })
  return list
}
const list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
console.log(greetDevelopers(list1))