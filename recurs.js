Array.prototype.reduce = function(process, initial){
    let result = this[0]
    if(initial){
      result = process(initial, this[0])
    }
    for(let i = 1; i < this.length; i++){
        result = process(result, this[i])
    }
    return result
  }

  console.log([1,2,3].reduce((a, b) => a * b, 2));