console.log('----------------------------Task:506 "Flatten a Nested Map"----------------------------')
let enter = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': null
  }
}
function flattenMap(map, str = '', res = {}) {
    if(typeof map !== 'object' || Array.isArray(map) || map == null){
      res[str] = map
      return map
    } else{
      for(let val in map){
        let newStr = str == '' ? val : str + '/' + val
        flattenMap(map[val], newStr, res)
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
