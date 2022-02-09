console.log('----------------------------Task:311 "Stringing me along"----------------------------')
function createMessage(str) {
    return (x) => {
        if(x === undefined){
            return str
        } else{
            return createMessage(str + ' ' + x)
        }
    }
}
console.log(createMessage("Hello")("World!")("how")("are")("you?")())

