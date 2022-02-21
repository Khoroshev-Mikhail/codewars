console.log('----------------------------Task:316 "multiFilter"----------------------------')
function isEven(el){
    return el % 2 === 0;
}

function isGTten(el){
    return el > 10;
}
var multiFilter = function(){
	return (x) =>{
        return arguments[0](x) && arguments[1](x) 
    }
};
//console.log(multiFilter(isEven, isGTten))
console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten)))