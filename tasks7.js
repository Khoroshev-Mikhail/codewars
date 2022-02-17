console.log('----------------------------Task:500 "Factorial"----------------------------')
function smartSum(...x){
  return x.reduce((a,b) => {
    if(!Array.isArray(b)){
      return a + b
    } else {
      return a + smartSum(...b)
    }
  }, 0)
}

console.log(smartSum(1,2,[[3,4],5],6))