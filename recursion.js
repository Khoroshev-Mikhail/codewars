//https://www.codewars.com/kata/5298a7b37edba9043200047b
function pipeline(seed , ...args ) {
    return args.reduceRight((acc, fn) => {
        if(acc instanceof Array){
            return fn.call(this,...acc)
        }
        return fn(acc)
    }, seed)
  };

  function compose(...args) {
    return (...x) => {
        return args.reduceRight((acc, fn) => {
            if(acc instanceof Array){
                return fn(...acc)
            }
            return fn(acc)
        }, x)
    }
  };