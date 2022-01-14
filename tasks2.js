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

console.log('----------------------------Task 136 Для тренировки----------------------------')
