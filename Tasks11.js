console.log('----------------------------Task:400----------------------------')
/*var numbers = [1, 2, 3, 4, 5]

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
console.log(numbers.square())*/

console.log('----------------------------Task 519:Nesting Structure Comparison----------------------------')
Array.prototype.sameStructureAs = function(x) {
    return sameStructureAs(this, x);
}
function sameStructureAs(a, b){

    //На случай если {} и []
    //isStringOrNumber(a) !== isStringOrNumber(b) подразумевает что они оба 'object'
    //Значит если кто-то из них !Array.isArray(a) значит это false
    //Но это плохо читабельно
    if(isStringOrNumber(a) !== isStringOrNumber(b) || !Array.isArray(a) || !Array.isArray(b)){
        return false
    }
    for(let i = 0; i < a.length; i++){
        if(typeof a[i] === 'object' && typeof b[i] === typeof a[i] && a[i].length !== b[i].length){
            return false
        }
        if(typeof a[i] === 'object' && typeof b[i] === 'object'){
            return sameStructureAs(a[i], b[i])
        }
        if(typeof a[i] === 'object' && typeof b[i] !== 'object' 
        || typeof b[i] === 'object' && typeof a[i] !== 'object'){
            return false
        }
    }
    return true
}
function isStringOrNumber(x){
    if(typeof x !== 'string' || typeof x !== 'number'){
        return false
    }
    return true
}
console.log(sameStructureAs([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ]))
console.log(sameStructureAs([1,'[',']'], ['[',']',1]))
console.log(sameStructureAs([ [ 2, 2 ], 2 ], [ [ 2, 2 ], 2 ]))
console.log(sameStructureAs([[1,1]], [[[],[]]]))