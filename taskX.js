console.log('----------------------------Task:316 "multiFilter"----------------------------')
function isEven(el){
    return el % 2 === 0;
}

function isGTten(el){
    return el > 10;
}
let i = -1;
var multiFilter = function(){
    i++
	return (x) =>{
        if(i !== arguments.length - 1){
            console.log('if')
            return arguments[i](x) && multiFilter()
        }
        return arguments[arguments.length - 1]
    }
};
//console.log(multiFilter(isEven, isGTten))
console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten)))