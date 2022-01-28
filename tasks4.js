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

