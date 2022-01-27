console.log('----------------------------Task 219: Run-length encoding----------------------------')
var runLengthEncoding = function(str){
    const result = [[0, 0]]
    const arrayOfLetters = str.split('')
    for(let i = 0 ; i < arrayOfLetters.length; i++){
        if(result[result.length - 1][0] === arrayOfLetters[i]){
            result[result.length - 1][1]++
        } else {
            result.push([arrayOfLetters[i], 1])
        }
    }
    const shifted = result.shift()
    return result.map( ([a, b]) => [b, a])
}
console.log(runLengthEncoding('WWSSSBBBB'))


console.log('----------------------------Task 220: "Is a number prime?"----------------------------')

