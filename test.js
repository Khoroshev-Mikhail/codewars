function pipeline(seed , ...args ) {

    return args.reduce((acc, fn) => {
        if(isNaN(fn(acc)) && !Array.isArray(fn(acc))){
            return acc
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
  function bbb(n){
      return -n
  }
  function rest(arr){
      return arr.slice(1)
  }
  function fifth(a){
      return pipeline(a, rest, rest, rest, rest)
  }
  console.log(pipeline([1,2,3,4,5,6], fifth, bbb))