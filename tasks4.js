//Надо перейти на формат где в основном я набиваю код, а вы только подсказываете! Пусть это будет медленнее 

console.log('----------------------------Task 219: Run-length encoding----------------------------')
var runLengthEncoding = function(str){
    const result = [[0, 0]]
    const arrayOfLetters = str.split('')
    for(let i = 0 ; i < arrayOfLetters.length; i++){
        if(result[result.length - 1][0] === arrayOfLetters[i]){
            result[result.length - 1][1]++
        } else {
            result.push([arrayOfLetters[i], 1])
        }
    }
    const shifted = result.shift()
    return result.map( ([a, b]) => [b, a])
}
console.log(runLengthEncoding('WWSSSBBBB'))


console.log('----------------------------Task 220: "Is a number prime?"----------------------------')





console.log('----------------------------Task 221: "Sum of Digits / Digital Root"----------------------------')

function digital_root(n) {
    while(n.toString().length !== 1){
        n = n.toString().split('').reduce( (a,b) => +a + +b)
    }
    return n
    //  return (n - 1) % 9 + 1; ???
}
console.log(digital_root(999))



console.log('----------------------------Task 222: "Alphabetized"----------------------------')
//Сработало на рандомном тесте

function alphabetized(s) {
    /*
    const _ = require('lodash');
    return _.sortBy(s.replace(/[^a-z]/ig, ''), _.toLower).join('');
    */

    //return s.replace(/[^A-Za-z]/g, '').split('').sort((a,b) => a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt()).join('')
    
    const obj = {}
    const str = s.replace(/[^A-Za-z]/g, '').split('')
    for(let i = 0; i < str.length; i++){
        obj[i] = str[i]
    }
   return Object.entries(obj).sort( (a, b) => {
       if(a[1] !== b[1] && a[1].toLowerCase() === b[1].toLowerCase()){
           return a[0]-b[0]
       }
       return a[1].toLowerCase().charCodeAt() - b[1].toLowerCase().charCodeAt()
   }).map(([_, b]) => b).join('')
}
console.log(alphabetized('ypJkpKyYYo2PyZiyjYsz2')) //'iJjkKoppPsyyyyYYYZz'
                                                   //'iJjkKoppPsyyYYyyYZz'
//9tqi0pQYKyojQy9Kak0qYky -----> expected 'aijKKkkopqQQqtyyYYy' to equal 'aijKKkkopqQQqtYyyYy'




console.log('----------------------------Task 223: "Sort Strings by Most Contiguous Vowels"----------------------------')

function sortStringsByVowels(strings){
    return strings.sort( (a, b) => mostContiguousVowels(b) - mostContiguousVowels(a))
}
function mostContiguousVowels(str){
    /*
    if(!/[aeiouAEIOU]+/g.test(str)){
        return 0
    }
    */
    return Math.max(...(str.match(/[aeiouAEIOU]+/g) || []).map(el => el.length))
}

console.log(sortStringsByVowels([ 'AIBRH', '', 'YOUNG', 'GREEEN' ]))

console.log('----------------------------Task 224: "My Languages"----------------------------')
function myLanguages(results) {
    //return Object.entries(results).filter(el => el[1] >= 60).sort(([_, a], [__, b]) => b - a).map(([lang, _]) => lang)
    return Object.keys(results).filter(el => results[el] >= 60).sort((a, b) => results[b] - results[a])
}
console.log(myLanguages({"Java" : 60, "Ruby" : 65, "Python" : 75}))


console.log('----------------------------Task 225: "Double Sort"----------------------------')
function dbSort(a){
    const numbers = a.filter(el => typeof el === 'number').sort((a, b) => a - b)
    const strings = a.filter(el => typeof el === 'string').sort()
    return numbers.concat(strings)
    //dbSort=emc2=>emc2.sort((proton,neutron)=>!neutron.split-!proton.split||neutron<proton||-1);
    //const dbSort = array => array.sort((a, b) => (typeof(a) == 'string') - (typeof(b) == 'string') || (a > b) - (a < b));
}
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))


console.log('----------------------------Task 228: "Persistent Bugger."----------------------------')
function persistence(num) {
    let count = 0;
    while(num.toString().length !== 1){
        num = num.toString().split('').reduce((a, b) => a*b)
        count++
    }
    return count
}
console.log(persistence(999))

console.log('----------------------------Task 229: "Group Anagrams"----------------------------')
function groupAnagrams(words){
    let obj = {}
    for(let str of words){
        obj[str] = 0
    }
    for(let i = 0; i < words.length; i++){ 
        Object.keys(obj).forEach(el => {
            if(isAnagrams(el, words[i])){
                obj[el] = i
            }
        })
    }
    let result = [];
    return Object.entries(obj).sort((a, b) => a[1] - b[1])
}

function isAnagrams(a, b){
    return a.split('').sort().join('') === b.split('').sort().join('')
}
/*
function isAnagrams(a, b) {
    return isEqual(wordToObject(a), wordToObject(b));
}
function isEqual(obj1, obj2){
    const obj1Keys = Object.getOwnPropertyNames(obj1)
    const obj2Keys = Object.getOwnPropertyNames(obj2)
    if(obj1Keys.length !== obj2Keys.length) return false 
    return obj1Keys.every(el => obj1[el] === obj2[el])
}
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
*/
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))

