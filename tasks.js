
console.log('----------------------------Задача 100----------------------------')

const ara = [1,-4,7,12]
function positiveSum(arr) {
  return arr.filter(item => item > 0).reduce( (a,b) => a+b, 0)
}
console.log(positiveSum(ara))





console.log('----------------------------Задача 101----------------------------')

/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

Простой, учитывая строку слов, возвращает длину самого короткого слова (слов).
Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.*/

const str101 = 'bitcoin take over the world maybe who knows perhaps';
function findShort(s){
    return Math.min(...s.split(' ').map(value => value.length));
}
console.log(findShort(str101))


console.log('----------------------------Задача 102----------------------------')
/*In this kata you will create a function that takes a list of non-negative integers and strings 
and returns a new list with the strings filtered out.

В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк 
и возвращает новый список с отфильтрованными строками.*/

const list = [1,'a','b', 0, 15]
function filter_list(arr){
  return arr.filter(item => typeof item == 'number')
}
console.log(filter_list(list))





console.log('----------------------------Задача 103----------------------------')
/*Добро пожаловать. В этом ката вас просят возвести в квадрат каждую цифру числа и соединить их.
Например, если мы запустим 9119 через функцию, выйдет 811181, потому что 9 2 равно 81, а 1 2 равно 1.
Примечание: функция принимает целое число и возвращает целое число.*/

function squareDigits(num){
  return +num
    .toString()
    .split('')
    // .map((value, index, arr) => Number(value, index, arr))
    .map(Number)
    .map((value, index, arr) => value ** 2)
    .join('');
}
console.log(squareDigits(3212))






console.log('----------------------------Задача 104----------------------------')
/*
Я дам вам целое число. Верните мне фигуру такой же длины и ширины, как целое число. 
Целое число будет целым числом от 1 до 50.
n = 3, поэтому я ожидаю, что будет квадрат 3x3, как показано ниже, в виде строки:
+++
+++
+++
*/

function generateShape(n){
  return ('+'.repeat(n)+'\n').repeat(n).trim()
  return new Array(n).fill('+'.repeat(n)).join("\n");
}
console.log(generateShape(3))





console.log('----------------------------Задача 105----------------------------')
/*
Создайте программу, которая фильтрует список строк и возвращает список только с именами ваших друзей.
Если в имени есть ровно 4 буквы, можете быть уверены, что это должен быть ваш друг! В противном случае можете быть уверены, что он не ...
Пример: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"].
т.е.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Примечание: сохраняйте исходный порядок имен в выводе.
*/
let people = ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]

function friend(friends){
  return friends.filter( bro => bro.length === 4);
}

console.log(friend(people))




//Решить с помощью (str.match(/[aeiou]/ig)||[]).length; Что за символы в скобках внутри match(???)
//ПЕРЕШАТЬ!!!
//ПЕРЕШАТЬ!!!
//ПЕРЕШАТЬ!!!
console.log('----------------------------Задача 106----------------------------')
function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  // var vowelsCount = 0;
  // str.split('').forEach( item => {
  //   if(vowels.includes(item)){
  //     vowelsCount++;
  //   }
  // })
  // return vowelsCount;
  return str.split('').filter(letter => vowels.includes(letter)).length
  
}

console.log(getCount('asdewrfefaf'))


console.log('----------------------------Задача 107----------------------------')
/*
У некоторых чисел есть забавные свойства. Например:
89 -> 8¹ + 9² = 89 * 1
695 -> 6² + 9³ + 5⁴ = 1390 = 695 * 2
46288 -> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Дано положительное целое число n, записанное как abcd ... (a, b, c, d ... цифры) и положительное целое число p
мы хотим найти положительное целое число k, если оно существует, например, сумма цифр n, взятых в последовательные степени p, равна k * n.

Другими словами:
Существует ли целое число k, например: (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k
Если это так, мы вернем k, если не вернем -1.
Примечание : n и p всегда будут строго положительными целыми числами.
*/

function digPow(n, p){ 
  const sum = n
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b, i) => a + b ** (p + i), 0);
  // let sum = 0; 
  // for(let i = 0; i < arr.length; i++){ 
  //   sum += Math.pow(arr[i], p)
  //   p++
  // }
  if(sum % n === 0){
    return sum / n
  }
  return -1
}

console.log(digPow(46288,3))


console.log('----------------------------Задача 108----------------------------')
/*
Напишите функцию, которая может возвращать наименьшее значение массива или индекс этого значения. 
Второй параметр функции укажет, должно ли оно возвращать значение или индекс.
Предположим, что первый параметр всегда будет массивом, заполненным как минимум одним числом 
и не имеющим дубликатов. Предположим, что второй параметр будет строкой, содержащей одно из двух значений: 
«значение» и «индекс».
*/

function min(arr, toReturn) {
  if (toReturn === 'value'){
    return Math.min(...arr)
  }
  return arr.indexOf(Math.min(...arr))
}



console.log('----------------------------Задача 109----------------------------')
/*
Ваша цель в этом ката - реализовать функцию различия, которая вычитает один список из другого и возвращает 
результат.
Он должен удалить все значения из списка a, которые присутствуют в списке, bсохраняя их порядок.
arrayDiff([1,2],[1]) == [2]
Если значение присутствует в b, все его вхождения должны быть удалены из другого:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
function arrayDiff(a, b) {
  return a.filter(a => !b.includes(a))
}
console.log(arrayDiff([1,2,2,2,3],[2]))
//Решить через Set объект


console.log('----------------------------Задача 110----------------------------')
/*Write a function that takes a single string (word) as argument. The function 
must return an ordered list containing the indexes of all capital letters in the string.*/
function capitals(word) {
	return word.split('').map((currElement, index) => {
    if(currElement == currElement.toUpperCase()){
      return index;
    }
  }).filter(item => item === undefined)
};

console.log(capitals("CodEWaRs"))



console.log('----------------------------Задача 111----------------------------')
/*Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') 
between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
Note that the number will always be non-negative (>= 0).*/


function insertDash(num) { //Переписать через replace
  return num.toString().split('').reduce((total, second)=>{
    //Можно ли в выражении сравнения указывать переменные через запятую?
      if(second % 2 !== 0 && total[total.length-1] % 2 !== 0){
        return total + '-' + second;
      } else {
        return total + second;
        // return String(total) + String(second)
        // return `${total}${second}`;
      }
  })
}

console.log(insertDash(454793))


console.log('----------------------------Задача 112----------------------------')











console.log('----------------------------Задача 113----------------------------')
/*Challenge:

Given a two-dimensional array, return a new array which carries over only those arrays from the original, 
which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, 
the arrays inside the array will only contain characters and integers.
Example:
Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].
Addendum:
Please keep in mind that for this kata, we assume that empty arrays are not homogenous.
The resultant arrays should be in the order they were originally in and should not have its values changed.
No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.*/

function isHomogenous(array) {
  return array.every(arr => typeof arr === typeof array[0]);
}
function filterHomogenous(arrays) {
  return arrays.filter(array => isHomogenous(array) && array.length > 0);
}
console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))



console.log('----------------------------Задача 114----------------------------')
/*Время выигрывать в лотерею!
Учитывая лотерейный билет (билет), представленный массивом из двух значений, вы должны выяснить, 
выиграли ли вы джекпот.
Пример билета:
[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
Для этого вы должны сначала подсчитать «мини-выигрыши» на своем билете. В каждом подмассиве есть как строка, 
так и номер. Если код любого из символов в строке совпадает с номером, вы получаете мини-выигрыш. 
Обратите внимание, что у вас может быть только одна мини-победа на подмассив.
После того, как вы подсчитали все свои мини-выигрыши, сравните это число с другим введенным значением (выигрыш). 
Если ваша сумма больше или равна (выигрыш), верните «Победитель!». Иначе верните «Неудачник!».
Все входные данные будут в правильном формате. Строки на билетах не всегда имеют одинаковую длину.*/

function isMiniWin([str, code]) {
  return Array.from(str).some(item => item.charCodeAt() === code);
}

function bingo(ticket, win){
  /*let count = ticket.reduce((total, curr) => {
   if(curr[0].split('').findIndex( item => item.charCodeAt() == curr[1]) >= 0){
     total++
   }
   return total;
  },0)*/
  const count = ticket.filter(isMiniWin).length
  // const count = ticket.filter((a,i,arr) => isMiniWin(a,i,arr)).length
  // if(count >= win){
  //   return 'Winner!'
  // } else{
  //   return 'Loser!'
  // }
  return count >= win ? 'Winner!' : 'Loser!';
  
}
console.log(bingo([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 1))




console.log('----------------------------Задача 115----------------------------')
/*Сценарий
Несколько человек стоят в ряд, разделенные на две команды . Первый человек входит в команду 1 , 
второй идет в команду 2 , третий переходит в команду 1 , и так далее.

Задача
Учитывая массив положительных целых чисел (веса людей) , верните новый массив / кортеж из двух целых чисел , 
где первое - это общий вес команды 1 , а второе - общий вес команды 2 .

Примечания
Размер массива составляет по меньшей мере 1 .
Все числа будут положительными .
Примеры ввода >> вывода
rowWeights([13, 27, 49])  ==>  return (62, 27)

Пояснение :
Первый элемент 62 - это общий вес команды 1 , а второй элемент 27 - это общий вес команды 2 .
rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Пояснение :
Первый элемент 120 - это общий вес команды 1 , а второй элемент 140 - это общий вес команды 2 .
rowWeights([80])  ==>  return (80, 0)
Пояснение :
Первый элемент 80 - это общий вес команды 1 , а второй элемент 0 - это общий вес команды 2 .*/


function rowWeights(array){
  const arr1 = array.filter((_, index) => index % 2 === 0).reduce((total, curr) => total+curr, 0);
  const arr2 = array.filter((_, index) => index % 2 !== 0).reduce((total, curr) => total+curr, 0);
  return [arr1, arr2]
}

console.log(rowWeights([80]))



console.log('----------------------------Задача 116----------------------------')
/*Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible
 rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
Good luck!*/

function scrollingText(text){
  const upper = text.toUpperCase().split('')
  const allVariablesArray = [];
  for(let i = 0; i < upper.length; i++){
    allVariablesArray.push(upper.join(''))
    // const [first, ...rest] = upper;
    // upper = [...rest, first];
    // upper.push(upper.shift());
  }
  return allVariablesArray
}
console.log(scrollingText('ABC'))

// !!! РЕШИТЬ ЧЕРЕЗ SLICE()


console.log('----------------------------Задача 117----------------------------')
/*zipWithпринимает функцию и два массива и объединяет их вместе, применяя функцию к каждой паре значений.
Значение функции - один новый массив.

Если массивы имеют неодинаковую длину, результат будет такой же длины, как и самый короткий.
(Значения более длинного массива просто не используются.)

Входные данные не должны изменяться.

Примеры
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
Проверка ввода
Предположим, что все введенные данные действительны.*/
function zipWith(fn,a0,a1) {
  const newArr = []
  // let length = a0.length
  // if(a0.length > a1.length) {
  //   length = a1.length
  // }
  const length = Math.min(a0.length, a1.length);
  for(let i = 0; i < length; i++){
    newArr.push(fn(a0[i], a1[i]))
  }
  return newArr
}
const plus = (a,b) => a+b
console.log(zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]))

//!!! Решить через Array.from
// Длина через Math.min сравнить два массива



function zzz(fn,a0,a1){
  return Array.from({length : Math.min(a0.length, a1.length)}, (_, k) => fn(a0[k],a1[k]))

  return a0.slice(0, a1.length).map((_, k) => fn(a0[k],a1[k]));
}
console.log(zzz(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]))



console.log('----------------------------Задача 118----------------------------')
/*
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
*/
function maps(x){
  return x.map(item => item*2)
}



console.log('----------------------------Задача 119----------------------------')
/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 
I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b)=> a + b, 0)
}




console.log('----------------------------Задача 120----------------------------')
/*
Is every value in the array an array?
This should only test the second array dimension of the array. 
The values of the nested arrays don't have to be arrays.
Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false

*/
const arrCheck = value => {
  return value.every(item => Array.isArray(item))
}


console.log('----------------------------Задача 121----------------------------')
/*
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:
n = 5
[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
*/
function box(n){
  return Array(n)
    .fill('-'.repeat(n), 0, 1) //Заполняем нулевой индекс массива
    .fill('-' + ' '.repeat(n-2) + '-', 1) //Заполняем значения с первого индекса массива до последнего
    .fill('-'.repeat(n), n-1) //Заполняем последнее значение

}
console.log(box(5))



console.log('----------------------------Задача 122----------------------------')
/*
A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. 
Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
findMagic([-20,-10,2,10,20]); // Returns 2
*/
// return the magic index
function findMagic(arr){
  return arr.findIndex((v, i) => v === i)
}

console.log(findMagic([-20,-10,2,10,20]))


console.log('----------------------------Задача 123----------------------------')
/*
Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the 
integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically. 
For more information, please consult:
*/

function flattenAndSort(array) {
  return [].concat(...array).sort(( a, b )=> a - b );
}
console.log(flattenAndSort([[1], [2], [0], [4], [3]]))


console.log('----------------------------Задача 124----------------------------')
/*
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater, 
and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)
*/

function twoSum(numbers, target) {
  /*
  1 value + other === target
  2 other === target - value 
  3 Получить индексы value и other
  */
  // const first = numbers.findIndex(value => value + numbers.find(x => x == target - value) == target )
  //const second = numbers.findIndex((x, i) => x + numbers[first] == target && i !== first)
  //return [first, second]
  // numbers.length === N → O(N²)
  /*for(let k = 0; k < numbers.length; i++){
    if(numbers[i] + numbers[k] === target && k !== i){
      return [i, k]
    }
  }*/
  const ggg = {};

  // ggg.qwerty
  // ggg["qwerty"]
  for(let i = 0; i < numbers.length; i++){
    ggg[numbers[i]] = i;
  }
  for(let k = 0; k < numbers.length; k++){
    const result = target - numbers[k];
    if(result in ggg && ggg[result] !== k){
      return [k, ggg[result]]
    }
  }
  return -1
  console.log(ggg)

}

console.log(twoSum([2,2], 4))
console.log(twoSum([2], 4))
// console.log(twoSum([1,2,3], 4))



console.log('----------------------------Задача 125----------------------------')
/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!
You have to write a method, that return the length of the missing array.
Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
[1, 2, 3, 4, 6]
*/


//Перерешать, не решил самостоятельно
function isEmptyArr(arr){
  return arr === null || arr.length === 0 
}
function getLengthOfMissingArray(arrayOfArrays) {
  if(isEmptyArr(arrayOfArrays) || arrayOfArrays.some(isEmptyArr)){
    return 0;
  }

  const sortedArr = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b);
  for(let i = 1; i < sortedArr.length; i++){
    if(sortedArr[i] - sortedArr[i - 1] !== 1){
      return sortedArr[i] - 1
    }
  }
  
}
console.log(getLengthOfMissingArray([])); // 0
console.log(getLengthOfMissingArray(null)); // 0
console.log(getLengthOfMissingArray([[3,4,5], []])); // 0
console.log(getLengthOfMissingArray([null, [1,2]])); // 0
console.log(getLengthOfMissingArray([[1], [1,2,3]])); // undefined

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))




console.log('----------------------------Задача 126----------------------------')
/*
A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:
10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.
The data is given in an array as such:
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/

function dataReverse(data) {
  let newArr = []
  for(let i = 0; i < data.length; i += 8){
    newArr.unshift(...data.slice(i, i + 8))
  }
  return newArr;
  // return newArr.reverse().flat() //CodeWars не пропустил такое решение - "Flat() is not a function"
  
  // newArr.reverse()
  // let newArrForCodewars = []
  // for(let k = 0; k < newArr.length; k++){
  //   newArrForCodewars.push(...newArr[k])
  // }
  // return newArrForCodewars
  
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))



console.log('----------------------------Задача 127----------------------------')
/*
The goal of this exercise is to convert a string to a new string where each character in the new string 
is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/


function duplicateEncode(word){
// dict = {}
// ...
//Надо посчитать сколько раз встречается значение
  const dict = {};
  for(const symbol of word){
    if(dict[symbol] === undefined) {
      dict[symbol] = 0
    }
    dict[symbol] += 1;
  }
  return word // N
    .toLowerCase() // O(N)
    .split('') // O(N)
    .map(symbol => dict[symbol] === 1 ? ')' : '(' ) // O(N)
    // .map((symbol, _, array) => array.indexOf(symbol) === array.lastIndexOf(symbol) ? ')' : '(' ) // O(N²)
    .join('') // O(N)


  /*word = word.split('')
  let newArr = []
  for(let i = 0; i < word.length; i++){
    if(word.filter(item => item.toUpperCase() == word[i].toUpperCase()).length > 1){
      newArr[i] = ')'
    } else {
      newArr[i] = '('
    }
  }
  return newArr.join('')*/
}

console.log(duplicateEncode('Success'))


console.log('----------------------------Задача 128----------------------------')
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
*/



function capitalize(s){

  const even = s.split('').map((symbol, index) => index % 2 === 0 ? symbol.toUpperCase() : symbol.toLowerCase()).join('')
  const odd = s.split('').map((symbol, index) => index % 2 !== 0 ? symbol.toUpperCase() : symbol.toLowerCase()).join('')

  /*s = s.split('')
  console.log(s.length)
  s.forEach((symbol, index) => {
    if(index % 2 == 0){
      even += symbol.toUpperCase()
      odd += symbol
    } else {
      even +=symbol
      odd += symbol.toUpperCase()
    }
  })*/
  return [even, odd]
};

console.log(capitalize('ssss'))


console.log('----------------------------Задача 129----------------------------')
/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while 
leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

/*
1.Найти все нечётные числа в отдельный массив
2.Map при условии (если value % 2 != 0) => value = odd.shift 
*/

function sortArray(array) {
  const odd = array.filter(item => item % 2 !== 0).sort((a,b) => a - b)
  return array.map(value => {
    if(value % 2 === 0){
      return value
    } else{
      return odd.shift()
    }
  })
}

// const people = [
//   {name: "A", age: 5},
//   {name: "B", age: 12},
//   {name: "X", age: 8},
//   {name: "C", age: 8},
// ];

function comparator(left, right) {
  // left должен остаться левее right → вернуть любое ОТРИЦАТЕЛЬНОЕ число
  // left должен стать правее right → вернуть любое ПОЛОЖИТЕЛЬНО число
  // left === right с точки зрения сортировки

  // if (left.age === right.age) {
  //   return 0;
  // }

  // if (left.age < right.age) {
  //   return -1;
  // }

  // if (left.age > right.age) {
  //   return +1;
  // }

  return left.age - right.age;
}

people.sort((a, b) => a.age < b.age ? -1 : 1);

// console.log(["лиса", "волк", "ёжик"].sort((a, b) => a.localeCompare(b, "ru-RU")));

// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))


console.log('----------------------------Задача 130----------------------------')
/*
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
list([ {name: 'Bart'} ])
// returns 'Bart'
list([])
// returns ''
*/

function listFns(arr){
  /*names.forEach((arr, index) => {
    if(index === names.length-2){
      str += arr.name + ' & '
    }else if(index !== names.length-1){
      str += arr.name + ', '
    } else{
      str += arr.name
    }
  })*/
  const names = arr.map(item => item.name);
  if(names.length === 0){
    return ''
  } 
  if(names.length === 1){
    return names[0]
  }


  const withoutLast = names.slice(0, -1).join(', ');
  const last = names[names.length - 1];

  return withoutLast + ' & ' + last
}

console.log(listFns([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
console.log(listFns([ {name: 'Bart'}, {name: 'Lisa'} ]))
console.log(listFns([ {name: 'Bart'} ]))
console.log(listFns([ ]))





console.log('----------------------------Task 131----------------------------')
/*
You've just finished writing the last chapter for your novel when a virus suddenly infects your document. 
It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:
  a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)
  b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.
Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
*/

function proofread (str) { 
  return str
    .toLowerCase()
    .replace( /ie/g, "ei")
    // .replaceAll("ie", "ei")
    .split('. ')
    .map(string => string[0].toUpperCase() + string.slice(1))
    .join('. ')
} 

console.log(proofread ("Their deceit was inconceivable. She seized the moment."))


console.log('----------------------------Task 132----------------------------')
/*
Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
Example
  For n = 152, the output should be 52;
  For n = 1001, the output should be 101.
  Input/Output
  [input] integer n
  Constraints: 10 ≤ n ≤ 1000000.
  [output] an integer
*/

/*
  1. Перевести в строку
  2. Получить максимальное количество вариантов без одной цифрыы
*/

function deleteDigit(n) {
  let result = []
  const digits = n.toString();
  for(let i = 0; i < digits.length; i++){
    // "12321"
    //     ↑  
    // let small = n.filter(digit => digit !== n[i])
    // let small = n.filter((_, j) => j !== i)
    // const copy = Array.from(n);
    // copy.splice(i, 1)
    // result.push(Number(copy.join('')));
    const str = digits.slice(0, i) + digits.slice(i + 1);
    result.push(Number(str));
  }
  return Math.max(...result)
}

// Math.max(7,3,9)
// Math.max([9, 1], [14], [3]) // NaN

// // [9, 1].join() === "9,1"

// const arr = Array(1_000_000).fill().map((_, i) => i);

// // Math.max(...arr);
// arr.reduce((a, b) => Math.max(a, b), -Infinity);

// Math.max(...[])
// Math.max()


console.log(deleteDigit(12345))

console.log('----------------------------Task 133----------------------------')
/*
Вернуть индекс массива, где сумма чисел слева от N равна сумме чисел справа
*/ 

//Функция возвращает сумму элементов массива с индекса = start, до end (Включительно)
const arrSum = (arr, start, end = arr.length -1 )=>{
  if(end > arr.length-1){
    end = arr.length-1
  }
  let sum = 0;
  for(let i = start; i <= end; i++){
    sum += arr[i]
  }
  return sum

  return arr.slice(start, end + 1).reduce((a, b) => a + b, 0);
}
function findEvenIndex(arr){
  let left = 0;
  let right = arr.reduce((a,b) => a + b, 0)
  for(let i = 0; i < arr.length; i++){
    if(left === right - arr[i]){
      return i
    }
    left += arr[i]
    right -= arr[i]
    console.log({left, right})
  }
  return -1
}

console.log(findEvenIndex([1,2,3,4,5,10]))


console.log('----------------------------Task 134----------------------------')

const st = `1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10`;

// Original_Balance:_1000.00
// 125_Market_125.45_Balance_874.55
// 126_Hardware_34.95_Balance_839.60
// 127_Video_7.45_Balance_832.15
// 128_Book_14.32_Balance_817.83
// 129_Gasoline_16.10_Balance_801.73
// Total_expense__198.27
// Average_expense__39.65
var rounded = function(number){
  return +number.toFixed(2);
}
function balance(book) {
  const [firstLine, ...rest] = book
    .replace(/[^a-z0-9.\s]/gi, '')
    .split('\n')
    .filter(str => str !== "");
  const originalBalance = Number(firstLine);

  console.log("rest", rest);
  const arr = [];
  
  let balance = originalBalance;

  for(const line of rest){
    const [id, name, priceStr] = line.split(' ')
    const price = Number(priceStr);

    balance -= price
    arr.push(`${id} ${name} ${price.toFixed(2)} Balance ${balance.toFixed(2)}`)
  }

  const expense = originalBalance - balance
  const averageExpense = expense / rest.length

  arr.push(`Total expense  ${expense.toFixed(2)}`)
  arr.push(`Average expense  ${averageExpense.toFixed(2)}`)
  arr.unshift('Original Balance: ' + originalBalance.toFixed(2));

  return arr.join("\r\n")
}

balance(`1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`);

`expected 'Original Balance: 1000.00\r\n undefined NaN Balance NaN\r\n125 Market 125.45 
Balance NaN\r\n126 Hardware 34.95 Balance NaN\r\n127 Video 7.45 Balance NaN\r\n128 Book 
14.32 Balance NaN\r\n129 Gasoline 16.10 Balance NaN\r\n undefined NaN Balance NaN\r\nTotal 
expense  NaN\r\nAverage expense  NaN' 
to equal 
'Original Balance: 1000.00\r\n125 Market 
125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 
Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 
801.73\r\nTotal expense  198.27\r\nAverage expense  39.65'`
// console.log(balance(`1223.00
// 125 Market 125.45
// 126 Hardware 34.95
// 127 Video 7.45
// 128 Book 14.32
// 129 Gasoline 16.10`));


// `Original_Balance:_1000.00
// 125_Market_125.45_Balance_874.55
// 126_Hardware_34.95_Balance_839.60
// 127_Video_7.45_Balance_832.15
// 128_Book_14.32_Balance_817.83
// 129_Gasoline_16.10_Balance_801.73
// Total_expense__198.27
// Average_expense__39.65`

function ffff(...args) {
  console.log(args);
}

// ffff`qwert ${2+2} uyguy ${7 + 9} gbjygguy`

// const Component = div`
//   width: ${x}px
// `;

console.log('----------------------------Task 135----------------------------')
/*
Остортировать массив по индексам заданным в другом массиве
*/ 

/*
1. Бежим по массиву с индексами
2. Каждое значение индекса пушим значение из инитиал
*/

//Перерешать через indexOf

function sort(initialArray, sortingArray) {
  let result = [];
  sortingArray.forEach((value, index) => {
    result[value] = initialArray[index]
  })
  return result
}
console.log(sort(['x', 'y', 'z'], [2, 1, 0]))



console.log('----------------------------Task 137----------------------------')
/*The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation 
being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest 
valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
  The following are examples of expected output values:
  rgb(255, 255, 255) // returns FFFFFF
  rgb(255, 255, 300) // returns FFFFFF
  rgb(0,0,0) // returns 000000
  rgb(148, 0, 211) // returns 9400D3
*/

function toSymbol(x){
  switch(x){
    case 10 : 
      return 'A'
    case 11 :
      return "B"
    case 12 : 
      return 'C'
    case 13 :
      return "D"
    case 14 : 
      return 'E'
    case 15 :
      return "F"
  }
  return String(x);
}
function destruct(x){
  if(x < 0){
    x = 0;
  } else if (x > 255){
    x = 255
  }
  // const firstValue = Math.floor( (x) / 16)
  // const secondValue = x - firstValue * 16
  // return toSymbol(firstValue) + toSymbol(secondValue)

  return x.toString(16).toUpperCase();
}
function rgb(r, g, b){
  return [r, g, b].map(destruct).join("");
  // return destruct(r) + destruct(g) + destruct(b)
}

console.log(rgb(255,255,-20))



console.log('----------------------------ДЗ на 12/01/2022----------------------------')
console.log('----------------------------Other Task----------------------------')


// https://www.codewars.com/kata/5e0baea9d772160032022e8c
const games = 
[[0, 5, 2, 2],   // Team 0 - Team 5 => 2:2
[1, 4, 0, 2],   // Team 1 - Team 4 => 0:2
[2, 3, 1, 2],   // Team 2 - Team 3 => 1:2
[1, 5, 2, 2],   // Team 1 - Team 5 => 2:2
[2, 0, 1, 1],   // Team 2 - Team 0 => 1:1
[3, 4, 1, 1],   // Team 3 - Team 4 => 1:1
[2, 5, 0, 2],   // Team 2 - Team 5 => 0:2
[3, 1, 1, 1],   // Team 3 - Team 1 => 1:1
[4, 0, 2, 0]]   // Team 4 - Team 0 => 2:0


function computeRanks(number, games) {
  const teams = [];
  for(let i = 0; i < number; i++){
    teams.push({id : i, points : 0, diff: 0, goals : 0})
  }
  for(const [teamA, teamB, goalsA, goalsB] of games){
    if(goalsA === goalsB){
      teams[teamA].points++;
      teams[teamB].points++;
    } else if(goalsA > goalsB){
      teams[teamA].points += 2
    } else if(goalsA < goalsB){
      teams[teamB].points += 2;
    }
    //Голы
    teams[teamA].goals += goalsA
    teams[teamB].goals += goalsB
    //Разница между пропущенными и забитыми
    teams[teamA].diff += goalsA - goalsB
    teams[teamB].diff += goalsB - goalsA
  }
  teams.sort( (a, b) => {
    if(a.points < b.points){
      return 1
    } else if (a.points > b.points){
      return -1
    } else if(a.diff < b.diff){
      return 1
    } else if(a.diff > b.diff){
      return -1
    } else if(a.goals < b.goals){
      return 1
    } else if(a.goals > b.goals){
      return -1
      }
    return 0
  })
  //Добавляем значение score(место) в зависимости от индекса (т.к. массив отстортирован)
  teams.forEach((obj, i) => {
    if(i > 0){
      //Если points,diff,goals одинаковы тогда присваиваем score как у предыдущей команды (у которой такие же points,diff,goals)
      if(obj.points === teams[i-1].points && obj.diff === teams[i-1].diff && obj.goals === teams[i-1].goals){ 
        return obj.score = teams[i-1].score
      }
    }
    return obj.score = i+1
  })

  
  //При таком решении вернет [ 1, 2, 3, 4, 4, 6 ] - Codewars это устраивает, но место под номером 5 пропущено!
  //Ниже решение при порядковом номере

  /*let score = 0;
  teams.forEach((obj, i) => {
    if(i >= 1 && obj.points === teams[i-1].points && obj.diff === teams[i-1].diff && obj.goals === teams[i-1].goals){
      return obj.score = teams[i-1].score
    }
    score++
    return obj.score = score;
  })*/


  //Снова сортируем по id
  teams.sort( (a, b) => a.id - b.id)
  //Возвращаем новый массив в котором индекс массива = teams.id, а value = teams.score
  console.table(teams);
  return teams.map( (obj) => obj.score)
}

console.log(">>>>>", computeRanks(6, games));



console.log('----------------------------Task 136----------------------------')

function howLongNulls(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0 ){
      count++
    } else {
      return count
    }
  }
}

function zeroPlentiful(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    //Проверяем состоит ли текущий ноль в последовательности из четырех нолей (0000), если нет то возвращаем 0 (т.к. по условию задачи последовательности нулей должны быть длинее четырех нолей)
    if(arr[i] === 0 && arr.slice(i - 1, i + 3).join('') !== '0000' && arr.slice(i - 2, i + 2).join('') !== '0000' && arr.slice(i - 3, i + 1).join('') !== '0000' && arr.slice(i, i + 4).join('') !== '0000'){
      console.log('arara=' + i)
      return 0
    }
    if(arr[i] === 0){
      count ++
      i  += howLongNulls(arr.slice(i)) - 1
      continue;
    }
  }
  return count
}

console.log(zeroPlentiful([ 1, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))


//Выучить регулярные выражения выражения и что они значат!!!

//Решение с помощью регулярного выражения
function newZeroPlentiful(arr){
  const cleanned = arr.join('').split(/[^0]/).filter(e => e !== '')
  return cleanned.every(nulls => nulls.length >= 4) ? cleanned.length : 0
}

console.log(newZeroPlentiful([ 1, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))



console.log('----------------------------Task 138----------------------------')

function cake(x, y){
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  const sum = y.split('').reduce( (accum, value, index) => {
    return index % 2 === 0 ? accum + value.charCodeAt() : (accum + alphabet.indexOf(value) + 1)
  }, 0)
  return sum >= Math.round(x * 0.7) ? "Fire!" : "That was close!"
}

//Testing for 631 and "hmxmaff": expected 'That was close!'
console.log(cake(631, 'hmxmaff'))


console.log('----------------------------Task 139----------------------------')

function span(arr, predicate) {
  let arr1 = [];
  let i = 0;
  while(predicate(arr[i]) && i < arr.length){
    arr1.push(arr[i])
    i++
  }
  let arr2 = arr.slice(i);
  return [arr1, arr2]
}

function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];
console.log(span(arr, isEven))


console.log('----------------------------Task 140----------------------------') //НЕ РЕШЕНО!
//Здесь нужно разобрать принципы программирования которые влияют на производительность кода ????????????????????????????????????????
//А так же методологию тестирования производтельности

function indexEqualsValue(a) {
  /*Вариант 1 (346ms) САМЫЙ БЫСТРЫЙ (=Варианту 7)
  for(let i = 0; i < a.length; i++){
    if(a[i] === i){
      return i
    }
  }
  return -1
  */
 
  /* Вариант 1.1 (312ms)
  function indexEqualsValue(a) {
  if(a[a.length-1] < a.length-1) {
    return -1;
  }
  for(let i = a[(a.length-1)/2] < (a.length-1)/2 ? (a.length-1)/2 : 0; i < a.length; i++){
    if(a[i] === i){
      return i
    }
  }
  return -1
}
*/
  /*Вариант 2 обратный цикл (432ms)
  for(let i = a.length - 1; i >= 0; i--){
    let newI = (a.length - 1 - i)
    if(a[newI] === newI){
      return newI
    }
  }
  return -1
  */

  /*Вариант 3 (1777ms)
  let i = 0;
  while(a[i] !== i && i < a.length){
    i++
  }
  return a[i] === i ? i : -1 
  */

  /*Вариант 4 (3266ms)
  const newA = a.filter( (el, i) => el === i)
  return newA.length > 0 ? newA[0] : -1
  */


  /*Вариант 5 (2052ms)
  const newA = a.find( (el, i) => el === i)
  if(newA || newA === 0){
    return newA
  }
  return -1
  */

  /*Вариант 6 (>12000ms, 112 тестов из 1000)
  const newggg = {}
  for(let i = 0; i < a.length; i++){
    newggg[a[i]] = i;
  }
  for(let val in newggg){
    if (newggg[val] == val) return +val
  }
  return -1
  */

  /*Вариант 7 (347ms)
    let i = 0;
  while(i < a.length){
    if(a[i] === i) return i
    i++
  }
  return -1
  */

  /*Вариант 8 (3130ms)
  let arr = []
  let i = a.length;
  while(i >= 0){
    if(a[i] === i) arr.push(a[i])
    i--
  }
  return (arr.length > 0) ? arr[arr.length-1] : -1
  */

  /* Вариант 9 (не правильное решение - подходящих индексов может быть несколько, а нужен минимальный из них)
  Нужно найти минимальное значение

  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
  let left = 0;
  let right = a.length-1
  let mid;
  let end = getBaseLog(2, a.length)
  let i = 0;
  while(i <= end ){
    mid = Math.floor((left + right) / 2)
    if(a[mid] < mid){
      left = mid + 1;
    } else if(a[mid] > mid){
      mid = right - 1;
    } else if ( a[mid] === mid ){
      return mid;
    } 
    i++
  }
  return -1;
    */
}

console.log('----------------------------Task 141----------------------------')

function last(x){
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  return x
    .split(' ')
    .sort( (a, b) => {
      if( alphabet.indexOf( a.slice( -1 ) ) > alphabet.indexOf( b.slice(( -1 )) ) ){
        return 1
      } else if (alphabet.indexOf( a.slice( -1 ) ) < alphabet.indexOf( b.slice(( -1 )) )){
        return -1
      }
      return 0
  })
}

console.log(last('man i need a taxi up to ubud'))


console.log('----------------------------Task 142----------------------------')
function sortByLength (array) {
  return array.sort( (a, b) => a.length - b.length)
};

console.log(sortByLength(["Beg", "Life", "I", "To"]))


console.log('----------------------------Task 143----------------------------')
//CODEWARS принял решение! Но не дал баллов и этот Ката висит в списке незавершенных 
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function binSearch(arr, toSearch) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor( (left + right) / 2 )
  let i = 0;
  let end = getBaseLog(2, arr.length)
  while (i <= end){
    mid = Math.floor((left + right) / 2)
    if(arr[mid] < toSearch){
      left = mid + 1
    } else if (arr[mid] > toSearch){
      right = mid - 1;
    } else if (arr[mid] === toSearch){
      return mid
    }
    i++
  }
  return -1
}

console.log(binSearch([1, 2, 3, 4, 5], 2))