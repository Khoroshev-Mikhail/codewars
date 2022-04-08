let animal = {
    eats: true
  };
  
  let rabbit = Object.create(animal, {
    jumps: {
      value: 'ttt',
      //enumerable: true
    }
  });
console.log(rabbit.jumps) // ttt
console.log(rabbit) // {} ????????????????



//[Symbol.iterator] что это?