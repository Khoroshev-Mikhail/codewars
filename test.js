function Animal(name){
    this.name = name
    this.x = function(){
        return 'x'
    }
}
let gafa = new Animal('Gafa')
console.log(Animal.prototype)
console.log(gafa)