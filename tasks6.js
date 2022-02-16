console.log('----------------------------Task:312 "Stringing me along"----------------------------')
function add(y = 0){  
  function two(x = 0){
    return add(x + y)
  }
  two[Symbol.toPrimitive] = () => y
  return two
}
//           two
/*
Test.expect(add(1) == 1);
Test.expect(add(1)(2) == 3);
Test.expect(add(1)(2)(3) == 6);
*/
//console.log(add()(2)(3)()(4)())

console.log('----------------------------Task:309 "I Spy"----------------------------')
function spyOn (func) {
  let count = 0
  let cache = []
  let cacheResults = []
  function inner(...x){
    count++
    let result = func(...x)
    cache.push(...x)
    cacheResults.push(result)
    return result
  }

  inner.callCount = () => {
    return count
  }
  inner.wasCalledWith = (val) => {
    return cache.includes(val)
  }
  inner.returned = (val) => {
    return cacheResults.includes(val)
  }
  return inner
}



console.log('----------------------------Task:313 "currying-vs-partial-application"----------------------------')
function add(x, y, z) {
  return x + y + z;
}
function curryPartial(fn, ...arr) {
    if(fn.length <= arr.length){
      return fn(...arr)
    }

    return function currentCurry(...x){
      return curryPartial(fn, ...arr, ...x)
    }
}


// curryPartial(add, 22)(5)  (...)(...) === curryPartial(add, 22, 5)  (...)(...)

let ara = curryPartial(add, 22)
console.log(ara(5)()(2))
// console.log(ara(50))


console.log('----------------------------Task:310 "I Spy"----------------------------')
/*
const True = T => F => T;
const False = T => F => F;
unchurch(True); //true;

describe("Simple tests", () => {
  it("Not", () => {
    Test.assertEquals(unchurch(Not(True)), false, "Not(True) is False");
  });
  it("And", () => {
    Test.assertEquals(unchurch(And(True)(True)), true, "And(True)(True) is True");
    Test.assertEquals(unchurch(And(True)(False)), false, "And(True)(False) is False");  
  });
  it("Or", () => {
    Test.assertEquals(unchurch(Or(True)(False)), true, "Or(True)(False) is True");  
    Test.assertEquals(unchurch(Or(False)(False)), false, "Or(False)(False) is False");  
  });
  it("Xor", () => {
    Test.assertEquals(unchurch(Xor(True)(True)), false, "Xor(True)(True) is False");
    Test.assertEquals(unchurch(Xor(True)(False)), true, "Xor(True)(False) is True");  
  });
});
*/

// const True = T => F => T;
// const False = T => F => F;

// const And = A => B => A/*True*/(B/*True*/)(False);

// And(True)(True) === True
// And(True)(False) === False  
// And(False)(True) === False
// And(False)(False) === False


// Not(False) === True
// Not(True) === False

// OR(True)(True) === True
// Or(False)(True) === True
// Or(True)(False) === True
// OR(False)(False) === False 

// const Not = A => null
// const And = A => B => null
// const Or = A => B => null
// const Xor = A => B => null





console.log('----------------------------Task:310 "I Spy"----------------------------')
double(double(addOne(sum(7, minus(sum(5, sum(4, 5)), 4))))); // 72

c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute(); // 72