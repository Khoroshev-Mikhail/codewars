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

  console.log(pipeline([1,2,3,4,5], (x) => x.slice(1)))