console.log('----------------------------Task 219: Run-length encoding----------------------------')
var runLengthEncoding = function(str){
    // const result = [[0, 0]]
    // const arrayOfLetters = str.split('')
    // for(let i = 0 ; i < arrayOfLetters.length; i++){
    //     if(result[result.length - 1][0] === arrayOfLetters[i]){
    //         result[result.length - 1][1]++
    //     } else {
    //         result.push([arrayOfLetters[i], 1])
    //     }
    // }
    // result.shift()
    // return result.map( ([a, b]) => [b, a])

    return str.match(/(.)\1*/g)?.map(s => [s[0], s.length]) ?? [];
}

//const z = x || y; // присвоить y, если x falsy = undefined/null/0/""/false/NaN/0n
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
//const z = x ?? y; // присвоить y, если x = undefined/null

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// o?.x
// o?.[key]
// o?.()


console.log(runLengthEncoding('WWSSSBBBB'))
console.log(runLengthEncoding(''))


console.log('----------------------------Task 220: "Is a number prime?"----------------------------')





console.log('----------------------------Task 221: "Sum of Digits / Digital Root"----------------------------')

function digital_root(n) {
    // while(n.toString().length !== 1){
    while(n >= 10){
        n = n.toString().split('').map(Number).reduce((a, b) => a + b, 0)
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
    // const obj = {}
    // for(let i = 0; i < str.length; i++){
    //     obj[i] = str[i]
    // }
    
    return s
        .replace(/[^A-Za-z]/g, '')
        .split('')
        .map((x, i) => [x, i])
        .sort((a, b) => {
            const aLower = a[0].toLowerCase();
            const bLower = b[0].toLowerCase();
            if (aLower === bLower) {
                return a[1] - b[1];
            }
            return aLower < bLower ? -1 : 1;
        })
        .map(([letter]) => letter)
        .join('');



   /*return Object.entries(obj).sort( (a, b) => {
       if(a[1] !== b[1] && a[1].toLowerCase() === b[1].toLowerCase()){
           return a[0]-b[0]
       }
       return a[1].toLowerCase().charCodeAt() - b[1].toLowerCase().charCodeAt()
   }).map(([_, b]) => b).join('')*/
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
    return Math.max(...(str.match(/[aeiou]+/ig) || []).map(el => el.length))
}

console.log(sortStringsByVowels([ 'AIBRH', '', 'YOUNG', 'GREEEN' ]))

console.log('----------------------------Task 224: "My Languages"----------------------------')
function myLanguages(results) {
    //return Object.entries(results).filter(el => el[1] >= 60).sort(([_, a], [__, b]) => b - a).map(([lang, _]) => lang)
    return Object.keys(results)
        .filter(el => results[el] >= 60)
        .sort((a, b) => results[b] - results[a])
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
    while(num >= 10){
        num = num.toString().split('').reduce((a, b) => a*b, 1)
        count++
    }
    return count
}
console.log(persistence(999))

console.log('----------------------------Task 229: "Group Anagrams"----------------------------')
/*function groupAnagrams(words){
    let obj = {}
    for(let str of words){
        let key = str.split('').sort().join('')
        // if(!obj.hasOwnProperty(key)){
        //     obj[key] = []
        // }
        // obj[key] = obj[key] ?? []
        obj[key] ??= []
        obj[key].push(str)
        //obj[key] = (obj[key] || []).concat([key]);  ???? Как прочитать?
    }
    return Object.values(obj)
}*/


//console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))


console.log('----------------------------Task 011: "String insert values"----------------------------')
var format = function (str, obj) {
    // if(Array.isArray(obj)){
    //     obj = Object.assign(obj)
    // }
    return str.replace(
        /{(\w+)}/g,
        (match, key) => key in obj ? obj[key] : match,
    );
};
/*
var format = function (str, obj) {
  var re = new RegExp('{(' + Object.keys(obj).join('|') + ')}', 'g');
  return str.replace(re, function (match, capture) { return obj[capture] });
};
*/
const obj = { foo : 'Jack', '0' : 'sandwich' };
console.log(format('Hello {foo} - make me a {0}', obj))

console.log('----------------------------Task 007: "create-phone-number"----------------------------')
function createPhoneNumber(numbers){
  const str = numbers.join(""); 
  return `(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6,10)}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


console.log('----------------------------Task 217: "Evaluating prefix Polish notation"----------------------------')
function calculate(expression) {
    const result = []
    const arr = expression.split(' ')
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] in objOperators){
            const a = result.pop()
            const b = result.pop()
            result.push(objOperators[arr[i]](a, b))
        } else {
            result.push(+arr[i])
        }
    }
    return result[0];
}

let objOperators = {
    '+': (a, b) =>  a + b,
    '-': (a, b) =>  a - b,
    '*': (a, b) =>  a * b,
    '/': (a, b) =>  a / b,
}
console.log(calculate('/ + 3 5 * 2 2'))
//('/ + 3 5 * 2 2')
//('/ + 3 5 4')

// 13 === 1101
// (13).toString(2)


