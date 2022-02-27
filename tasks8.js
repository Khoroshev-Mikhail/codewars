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