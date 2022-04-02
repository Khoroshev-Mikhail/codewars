console.log('----------------------------Task:507 "Find all possible number combos that sum to a number"----------------------------')
var numbers = [1, 2, 3, 4, 5]

Array.prototype.square = function(){
    return this.map(n => n*n)
}
Array.prototype.cube() = function(){
    return this.map(n => n*n*n)
}
Array.prototype.average() = function(){
    return this.reduce((a, b) => a + b, 0) / this.length
}
Array.prototype.sum() = function(){
    return this.reduce((a, b) => a + b, 0)
}
Array.prototype.even() = function(){
    return this.filter(el => el % 2 === 0)
}
Array.prototype.odd() = function(){
    return this.filter(el => el % 2 !== 0)
}
console.log(numbers.square())