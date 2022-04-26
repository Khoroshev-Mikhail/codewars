//console.log('----------------------------Task----------------------------')
//https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
    let int = new Set();
    A.forEach(el => int.has(el) ? int.delete(el) : int.add(el));
    return int.values().next().value;
}
//console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))


//console.log('----------------------------Task----------------------------')
//https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(string){
    return string.split(' ').map(el => el.length >= 5 ? el.split('').reverse().join('') : el).join(' ')
}
//console.log(spinWords('Hey fellow warriors'))


console.log('----------------------------Task----------------------------')