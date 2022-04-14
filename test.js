function multiply (value, times) {
    switch(typeof value){
        case 'string': 
            if(typeof times !== 'number' || !Number.isInteger(times)){
                return new RangeError('Invalid count value')
            }
            return value.repeat(times)
        case 'number':
            return value * times
        case 'object':
            if(value === null){
                return null
            }
            return new Array(times).fill(value)
        case 'function':
            return function(){
                for(let i = 0; i < times; i++){
                    value.call(this, ...arguments)
                }
            }
        default:
            return value
    }
}
var ref = {};
console.log(multiply('foo', 0.3))

