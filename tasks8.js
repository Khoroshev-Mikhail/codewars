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
