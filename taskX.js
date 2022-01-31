var runLengthEncoding = function(str){
const obj = {}
const arr = str.split('');
for(let symbol of arr){
    if(!obj.hasOwnProperty(symbol)){
    obj[symbol] = 0
    }
    obj[symbol]++
}
    return Object.entries(obj).map( ([a, b]) => [b, a])
}

console.log(runLengthEncoding('VVVIIIIISOOOHHZZKKKKJJJXXUUFFYYYYTTNNNNAAAA'))
/*
expected 
'VVVIIIIISOOOHHZZKKKKJJJXXUUFFYYYYTTNNNNAAAA'
'VVVIIISOHHZZKKKKJJJXXOOUUFFIIYYYYTTNNNNAAAA'
*/