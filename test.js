console.log('----------------------------Task:411----------------------------')
var addOne = function(e) { return e + 1 };
var square = function(e) { return e * e }
var bbb = function(e) { return e * 2 }
Function.prototype.pipe = function(fn){
    /*
    const first = this
    return function(el){
        const main = first(el)
        return fn(main)
    }
    */
    return function(el){
        return fn(this(el))
    }.bind(this)
}

var result = addOne.pipe(square).pipe(bbb)
console.log(result(5)); // 72