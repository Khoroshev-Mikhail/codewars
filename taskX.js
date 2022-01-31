console.log('----------------------------Task 011: "String insert values"----------------------------')
var format = function (str, obj) {
    if(Array.isArray(obj)){
        obj = Object.assign(obj)
    }
    return str.replace(/{\w+}/g, x => {
        if(x.slice(1, -1) in obj){
            return obj[x.slice(1, -1)]
        }
        return x
    })
};
/*
var format = function (str, obj) {
  var re = new RegExp('{(' + Object.keys(obj).join('|') + ')}', 'g');
  return str.replace(re, function (match, capture) { return obj[capture] });
};
*/
const obj = { foo : 'Jack', '0' : 'sandwich' };
console.log(format('Hello {foo} - make me a {0}', obj))
