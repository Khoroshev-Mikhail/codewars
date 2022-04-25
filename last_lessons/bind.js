const obj = {
  a: 1,
  fn(x, y, z) {
    console.log([this.a, x, y, z])
  } 
}

const obj2 = {
  a: 100,
}

// obj.fn.call(obj2, 3, 4, 5);

Function.prototype.bind2 = function(val, ...firstArgs){
    const fns = this
    return function(...args){
        return fns.call(val, ...firstArgs ,...args)
    }
}


const fn = obj.fn.bind2(obj2, 777);

fn(9,0);