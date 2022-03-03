console.log('----------------------------Task:506 "Flatten a Nested Map"----------------------------')
let enter = 
{   
  'y' : 4,
    'a': {
        'b': 12,
        'e' : 11,
        'g' : {
          'h' : 100
          },
        'j' : 55
        }
}
function flattenMap(map, str = '', res = {}) {
    if(typeof map === 'number'){
      res[str] = map
      str = ''
      return map
    } else{
      for(let val in map){
        str += val + '/'
        flattenMap(map[val], str, res)
        str = ''
      }
      return res
    }  
}
console.log(flattenMap(enter))












/*
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
function solve(x){
  
}
console.log(solve([ [ 0, 2, 7 ], [ 1, 3 ], [ 0, 2, 7 ] ]))
*/
