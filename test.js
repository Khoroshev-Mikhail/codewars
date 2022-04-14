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
        this.execute = () => 1
        this[fns.name] = fns
    }

    return new Chain()
}
console.log(chain(sum).sum(2, 2))