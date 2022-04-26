function sum(x, y) {
    return x + y;
  }
  
  function double(x) {
    return sum(x, x);
  }
  
  function minus (x, y) {
    return x - y;
  }
  
  function addOne(x) {
    return sum(x, 1);
}

function chain(fns) {
    function Wrapper(x){
        this.accum = x
    }
    for(fn in fns){
        let func = fns[fn]
        Wrapper.prototype[fn] = function(){
            let args = Array.from(arguments)
            if(args.accum){
                args.unshift(this.accum)
            }

            let x = func.apply(null, args)
            return new Wrapper(x)
        }
    }
    Wrapper.prototype.execute = function(){
        return this.accum
    }
    return new Wrapper()
}
var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});

console.log(c.sum(5, 6).execute())


























































