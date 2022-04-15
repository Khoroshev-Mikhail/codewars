const obj = {
    ara : 1
}

let x = Object.getPrototypeOf(obj)
x.prototype.sayHi = function(){
    return 1
}
console.log(x)
/*
class Test{
    constructor(name){
        this.name = name
    }
}
let y = new Test('Gafa')
Test.prototype.sayHi = function(){
    return 'hello'
}
console.log(Object.getPrototypeOf(y))
function newObj(name){
    this.name = name
}
let z = new newObj('Batman')
*/
