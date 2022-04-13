class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      return (this.name + ' makes a noise.');
    }

    x() {
      return "x";
    }
  }

class Cat extends Animal {
  speak(){
    return (this.name + ' meows.');
  }
}


// https://www.youtube.com/watch?v=Qn3Qah7W6Vs
//Задание: передать методы из Animal в Cat2
//UPD: Точно из класса в функцию????
const Animal2 = function(name){
    this.name = name
    this.ara = function(){
        return this.name
    }
}
Object.defineProperty(Animal2.prototype, 'speak', {
    value : function(){
        return (this.name + ' makes a noise.');
    }
})

function Cat2(name){
    //Animal2.call(this, name)
    Animal2.apply(this, arguments);
    this.prototype = Animal
}
Object.defineProperty(Cat2.prototype, 'speak', {
    value : function(){
        return (this.name + ' meaows.');
    }
})
var cat = new Cat2('Mr Whiskers');
console.log(cat.x())

