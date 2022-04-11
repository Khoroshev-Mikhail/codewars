var addOne = function(e) {
    return e + 1
};

var square = function(e) {
    return e * e
}

var bbb = function(e) {
    return e*2
}
Function.prototype.pipe = function(...args){
    const first = this
    return function(el){
        let resOne = first(el)
        return args.reduce((a, b) => b(a), resOne)
    }
}

var result = [1,2,3,4,5].map(addOne.pipe(square, bbb))
console.log(result)