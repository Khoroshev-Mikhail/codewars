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
        //isStringOrNumber(a[i]) !== isStringOrNumber(b[i]) почему не работает???
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
/*
console.log(sameStructureAs([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ]))
console.log(sameStructureAs([1,'[',']'], ['[',']',1]))
console.log(sameStructureAs([ [ 2, 2 ], 2 ], [ [ 2, 2 ], 2 ]))
console.log(sameStructureAs([[1,1]], [[[],[]]]))
*/

console.log('----------------------------Task:400----------------------------')
var numbers = [1, 2, 3, 4, 5]
Array.prototype.square = function(){
    return this.map(n => n*n)
}
Array.prototype.cube = function(){
    return this.map(n => n*n*n)
}
Array.prototype.average = function(){
    return this.reduce((a, b) => a + b, 0) / this.length
}
Array.prototype.sum = function(){
    return this.reduce((a, b) => a + b, 0)
}
Array.prototype.even = function(){
    return this.filter(el => el % 2 === 0)
}
Array.prototype.odd = function(){
    return this.filter(el => el % 2 !== 0)
}

console.log('----------------------------Task:401 Implementing Array.prototype.groupBy method----------------------------')
Array.prototype.groupBy = function(fn){
    const obj = {}
    this.forEach(el => {
        let result = el
        if(fn){
            result = fn(el)
        }
        /* Как это работает???
        (obj[result] = obj[result] || []).push(el)
        */
        /* Почему не сработало????????
        if(!result in obj){
            obj[result] = []
        }
        obj[result].push(el)
        */
        
        if(result in obj){
            obj[result].push(el)
        } else{
            obj[result] = [el]
        }
        
    })
    return obj
}
//console.log([1,2,3,2,4,1,5,1,6].groupBy())

console.log('----------------------------Task:402 Extract Nested Object Reference----------------------------')
var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };
Object.prototype.hash = function(string) {
    let arr = string.split('.')
    let val = arr[0]
    if(!this.hasOwnProperty(val)){
        return undefined
    }
    if(arr.length === 1){
        return this[val]
    }
    return this[val].hash(arr.slice(1).join('.'))
}
console.log(obj.hash('person.name'))


console.log('----------------------------Task:403 String like [Char]----------------------------')
String.prototype.map = function(fn){
    const arr = this.split('')
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push( fn(arr[i]) )
    }
    return result.join('')
}
String.prototype.join = function(str){
    return this.split('').join(str)
}
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
String.prototype.sort = function(fn){
    return this.split('').sort(fn).join('')
}
String.prototype.filter = function(fn){
    if(this.split('').filter(fn)){
        return this.split('').filter(fn).join('')
    }
    return undefined
}
String.prototype.forEach = function(fn){
    if(this.split('').forEach(fn)){
        return this.split('').forEach(fn).join('')
    }
    return undefined
}
String.prototype.some = function(fn){
    return this.split('').some(fn)
}
String.prototype.every = function(fn){
    return this.split('').every(fn)
}
String.prototype.push = function(str){
    return this + str
}
String.prototype.pop = function(str){
    return this.replace(/^./, '')
}
String.prototype.shift = function(str){
    return this.split('').splice(0, 1).join('')
}
String.prototype.unshift = function(str){
    return (str + this).length
}
String.prototype.splice = function(...args){
    const arr = this.split('')
    arr.splice(...args)
    return arr.join('')
}
String.prototype.reduce = function(fn, x){ 
    return this.split('').reduce(fn, x)
}
String.prototype.reduceRight = function(fn, x){
    return this.split('').reduceRight(fn, x).join('')
}

