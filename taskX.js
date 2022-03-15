console.log('----------------------------Task:523 "Greatest common divisor"----------------------------')
function mygcd(x,y){
  if(x % y === 0){
    return y
  } 
  return mygcd(y, x % y)
}
console.log(mygcd(30, 12))

















