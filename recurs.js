function chained(...functions) {
    return function(start){
        return functions.reduceRight((acc, fn) => {
            return fn(acc)
        }, start)
    }
}