console.log('----------------------------Task:316 "multiFilter"----------------------------')
function isEven(el){
    return el % 2 === 0;
}
function isGTten(el){
    return el > 10;
}
function islessThenFifteen(el){
    return el < 15
}
var multiFilter = function(...args){
	return (x) => {
        return args.every(fn => fn(x))
    }
};
console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten, islessThenFifteen)))

console.log('----------------------------Task:317 "Combinator Flip"----------------------------')
function flip(fn) {
    return (...x) =>{
        return fn(...x.reverse())
    }
}
function print(a,b) {
    return a + " -> " + b;
}
console.log(flip(print)(4, 5))

console.log('----------------------------Task:515 "Sum of a sequence"----------------------------')
const sequenceSum = (begin, end, step) => {
  if(begin > end){
    return 0
  }
  return begin += sequenceSum(begin + step, end, step)
};
console.log(sequenceSum(1, 5, 1))

console.log('----------------------------Task:522 "Sum squares of numbers in list that may contain more lists"----------------------------')
function SumSquares(l){
  return l.reduce((a, b) => {
    return Array.isArray(b) ? a + SumSquares(b) : a + b**2
  }, 0)
}
console.log(SumSquares([1, 5, 1, [[2]]]))

console.log('----------------------------Task:501 "determine-sizeof-c-datatype-beginner-no-prior-c-knowledge-required"----------------------------')
const types = {
  "char" : 1,
  "short" : 2,
  "int" : 2,
  "long" : 4,
  "long long" : 8,
  "unsigned char" : 1,
  "unsigned short" : 2,
  "unsigned int" : 2,
  "unsigned long" : 4,
  "unsigned long long" : 8,
  "float" : 4,
  "double" : 8
}
function sizeof(x) {
  if(typeof x === "string"){
    return types[x]
  }

  const sizes = x.members.map(sizeof);
  if(x.type === 'struct'){
    return sizes.reduce((a, b) => a + b, 0)
  }
  if(x.type === 'union'){
    return Math.max(...sizes, 0); 
  }
}
// if(x.members.length < 1){ //Можно ли как-нибудь зарефакторить это условие? Вроде Math.max(...x) || 0
//   return 0
// }
console.log(sizeof({
  type: "struct",
  members: [
    "int",
    "int",
    "float",
    {
      type: "union",
      members: []
    }
  ]
}))


console.log('----------------------------Task:505 "Simple repeated words"----------------------------')
function solve(str, sentence) {
  /*let res = []
  for(let i = 0; i < str.length; i++){
    let underRes = []
    sentence.split('').forEach((element, index) => {
      if(element === str[i]){
        underRes.push(index)
      }
    });
    res.push(underRes)
  }
  return res*/
  if (str === "") {
    return 1;
  }
  let sum = 0;
  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === str[0]){
      sum += solve(str.slice(1), sentence.slice(i+1))
    }
  }
  return sum;
}
console.log(solve("zaz","zazapulz"))
//solve("zaz","zazapulz") = 4 because they are ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ

//1 разбиваем на оставшееся предложение от каждого вхождение первого символа
//

// 'x' 'axxa' // 2
// '' 'xa'
// '' 'a'


// 'az' 'azapulz'  // 3
// 'az' 'apulz'    // 1
// 'az' ''         // 0

// function solve(x){
  
// }
// console.log(solve([ [ 0, 2, 7 ], [ 1, 3 ], [ 0, 2, 7 ] ]))


console.log('----------------------------Task:506 "Flatten a Nested Map"----------------------------')
let enter = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': null
  }
}
function flattenMap(map, path = []) {
  if(typeof map !== 'object' || Array.isArray(map) || map == null){
    return { [path.join("/")]: map }
  }
  const res = {}
  for(let val in map){
    Object.assign(res, flattenMap(map[val], [...path, val]));
  }
  return res  
}
console.log(flattenMap(enter))