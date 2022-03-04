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
var multiFilter = function(){
	return (x) => {
        return Object.values(arguments).every(fn => fn(x))
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
  if(x.type === 'struct'){
    return x.members.reduce((a, b) => {
      if(typeof b === 'object'){
        return a + sizeof(b)
      }
      return a + types[b]
    }, 0)
  }
  if(x.type === 'union'){
    if(x.members.length < 1){ //Можно ли как-нибудь зарефакторить это условие? Вроде Math.max(...x) || 0
      return 0
    }
    return Math.max(...x.members.map(el => {
      if(typeof el === 'object'){
        return sizeof(el)
      }
      return types[el]
    })) 
  }
  if(x in types){
    return types.x
  }
}
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

/*
console.log('----------------------------Task:505 "Simple repeated words"----------------------------')
function ara(str, sentence) {
  let res = []
  for(let i = 0; i < str.length; i++){
    let underRes = []
    sentence.split('').forEach((element, index) => {
      if(element === str[i]){
        underRes.push(index)
      }
    });
    res.push(underRes)
  }
  return res
}
function solve(x){
  
}
console.log(solve([ [ 0, 2, 7 ], [ 1, 3 ], [ 0, 2, 7 ] ]))
*/

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
function flattenMap(map, str = '', res = {}) {
    if(typeof map !== 'object' || Array.isArray(map) || map == null){
      res[str] = map
      return map
    } else{
      for(let val in map){
        let newStr = str == '' ? val : str + '/' + val
        flattenMap(map[val], newStr, res)
      }
      return res
    }  
}
console.log(flattenMap(enter))