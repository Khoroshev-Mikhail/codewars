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

/*
function chain(fns) {
    function Wrapper(x){
        this.accum = x
    }
    for(let fn in fns){
        Wrapper.prototype[fn] = fns[fn]
    }
    Wrapper.prototype.execute = function(){
        return this.accum
    }
    return new Wrapper()
}
*/
function chain(fns) {
    function Wrapper(x){
        this.accum = x
    }
    Wrapper.prototype.sum = function(a, b){
        //Либо передать аргументы в chain, либо через aplly
        this.accum = a + b
        return chain()
    }
    Wrapper.prototype.minus = function(a, b){
        this.accum = this.accum - a
        return chain()
    }
    Wrapper.prototype.execute = function(){
        return this.accum
    }
    return new Wrapper()
}
var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});
c.minus(5).sum(2, 10)
console.log(c.execute())
