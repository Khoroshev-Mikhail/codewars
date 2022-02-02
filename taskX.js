console.log('----------------------------Task 007: "create-phone-number"----------------------------')
function solution(number){
  let i = 0;
  let arr = [0]
  while( i < number){
    if(i % 3 == 0 || i % 5 == 0){
      arr.push(i)
    }    
    i++
  }
  return arr.reduce((a, b) => a + b)
}

console.log(solution(10))
