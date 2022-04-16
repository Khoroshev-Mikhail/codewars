/*


const obj = {
    ara : 1
}

let x = Object.getPrototypeOf(obj)
x.prototype.sayHi = function(){
    return 1
}

*/
//console.log(x.prototype)


/*
function fnsObj(name){
    this.name = name
}
let z = new fnsObj('Batman')

let parent1 = Object.getPrototypeOf(z)
let parent2 = Object.getPrototypeOf(Object.getPrototypeOf(z))
let parent3 = Object.getPrototypeOf(parent2)

console.log(parent2)
*/

/*Test.prototype.sayHi = function(){
    return 'hello'
}*/

class Deda{
    constructor(name){
        this.name = name
    }
}
class Papa extends Deda{
    constructor(name){
        super(name)
    }
}
class Man extends Papa{
    constructor(name){
        super(name)
    }
}
let objByClass = new Man('Mike') 
let parent1 = Object.getPrototypeOf(objByClass)
let parent2 = Object.getPrototypeOf(parent1)
let parent3 = Object.getPrototypeOf(parent2)
let parent4 = Object.getPrototypeOf(parent3)
console.log(parent4)


/*
const obj = {
    ara : 1
}

const ara = {
    ggg : 2
}
Object.setPrototypeOf(ara, obj)


let parent1 = Object.getPrototypeOf(ara)
let parent2 = Object.getPrototypeOf(parent1)
console.log(y.constructor)*/
//let parent3 = Object.getPrototypeOf(parent2)
/*x.prototype.sayHi = function(){
    return 1
}*/

