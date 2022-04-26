function Lazy() {
    this.arrayOfFn = []
    Lazy.prototype.add = function(fn, ...args){
        this.arrayOfFn.push([fn, ...args])
        return this
    }
    Lazy.prototype.invoke = function(...arr){
        let result;
        for(let i = 0; i < this.arrayOfFn.length; i++){
            let [fn, ...args] = this.arrayOfFn[i]
            result = fn(...arr)
        }
        console.log(result)
        return result
    }
}
//console.log(new Lazy().add(max))           ==  undefined
let ara = new Lazy()
.add(filterNumbers)
//.add(filterRange, 2, 7)
//.add(max)
.invoke(1, 8, 6, [], "7", -1, {v: 5}, 4)














function max() {
    return Math.max.apply(null, arguments);
}

function filterNumbers() {
  return Array.prototype.filter.call(arguments, function(value) {
    return isNumeric(value);
  });
}

function isNumeric(n) {
  return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max) {
  var args = Array.prototype.slice.call(arguments, 2);
  return Array.prototype.filter.call(args, function(value) {
    return min <= value && value <= max;
  });
}