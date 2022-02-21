console.log('----------------------------Task:316 "multiFilter"----------------------------')
function isEven(el){
    return el % 2 === 0;
}

function isGTten(el){
    return el > 10;
}

var multiFilter = function(){
    let ggg = arguments
    let i = 0
	return function ara(x){
        i++
        console.log(i+'----'+x)
        return ggg[0](x) && ggg[1](x)
    }
};
//console.log(multiFilter(isEven, isGTten))
console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten)))
//console.log(multiFilter(isEven))