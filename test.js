function binarySwap(input) {
    if(input == 1) return 0
    if(input == 0) return 1
    if(Array.isArray(input)){
        if(input.length === 1){
            return binarySwap(input[0])
        }
        return input.map(el => binarySwap(el))
    }
    if(typeof input === 'function'){
        return binarySwap(input())
    }
}

console.log(binarySwap(['1', 0, '0', 1]))
/*
function binarySwap(input) {
  return typeof input === 'function' ? binarySwap(input()): input instanceof Array && input.length > 1 ? input.map(binarySwap): +!+input;
}
*/