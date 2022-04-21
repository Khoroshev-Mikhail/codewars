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
Object.defineProperty(Animal2.prototype, 'x', {
    value : function(){
        return 'x';
    }
})

function Cat2(name){
    //Animal2.call(this, name)
    Animal2.apply(this, arguments);
}

// const Cat2 = new Function("name", `
// //Animal2.call(this, name)
// Animal2.apply(this, arguments);
// `)


// Cat2.constructor === Cat2.__proto__.constructor === Function.prototype.constructor === Function

// Cat2.prototype = new Animal2()

Object.defineProperty(Cat2.prototype, 'speak', {
    value : function(){
        return (this.name + ' meaows.');
    }
})

// cat === {
//   name: 'Mr Whiskers',
//   __proto__: { // ← Cat2.prototype
//     constructor: Cat2,
//     speak,
//     __proto__: { // ← Animal2.prototype
//       constructor: Animal,
//       speak,
//       x,
//       __proto__: { // ← Object.prototype
//         constructor: Object,
//         toString,
//         valueOf,
//         hasOwnProperty,
//         __proto__: null
//       }
//     }
//   }
// }

// Cat2.prototype.__proto__ = Animal2.prototype
Object.setPrototypeOf(Cat2.prototype, Animal2.prototype)


var cat = new Cat2('Mr Whiskers');
console.log(cat.__proto__ === Cat2.prototype)
console.log(cat.constructor === Cat2)
console.log(cat.speak())
console.log(cat.x())

