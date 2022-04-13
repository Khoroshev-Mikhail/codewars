function multiply (value, times) {
    switch(typeof value){
        case 'string': 
            return value.repeat(times)
        case 'number':
            return value*times
        case 'object':
            if(value === null){
                return null
            }
            return new Array(3).fill(value)
        case 'function':
            //Вернуть функцию
            for(let i = 0; i < times; i++){
                value.call()
            }
        default:
            return value
    }
}
let fns = function(x){
    console.log(x)
}
let ara = multiply({}, 3)
multiply(fns, 3)
