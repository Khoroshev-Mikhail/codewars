function sum(x, y) {
    return x + y;
} 
function minus (x, y) {
    return x - y;
}
function double(x) {
    return sum(x, x);
}

function addOne(x) {
    return sum(x, 1);
}

function chain(fns) {
    let Chain = function(val){
        for(let fn in fns){
            this[fn] = fns[fn]
        }
        this.execute = () => 1
    }

    return new Chain()
}
console.log(chain({double: double, addOne: addOne}))