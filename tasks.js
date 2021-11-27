
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
  return arr1.concat(arr2).reduce((a,b)=>a+b,0)
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
  //На codewars не сработало:
  return new Array(n)
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
  return arr.findIndex((value, index) => value === index)
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
  //return array.reduce((a,b) => a.concat(b), []).sort(( a, b )=> a - b );
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
  numbers.findIndex( value => value )
}