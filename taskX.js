console.log('----------------------------Task:505 "Simple repeated words"----------------------------')
function ara(str, sentence) {
  let res = []
  for(let i = 0; i < str.length; i++){
    let underRes = []
    sentence.split('').forEach((element, index) => {
      if(element === str[i]){
        underRes.push(index)
      }
    });
    res.push(underRes)
  }
  return res
}
let i = 0;
function solve(x){
  if(i === x.length - 1){
    return 
  }
}
console.log(solve([ [ 0, 2, 7 ], [ 1, 3 ], [ 0, 2, 7 ] ]))