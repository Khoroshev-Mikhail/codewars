console.log('----------------------------Task:517 "Deep comparison of objects"----------------------------')
const obj1 = {
  ara : 2,
  bara : {
    ggg : 3,
    vvv : 6
  }
}
const obj2 = {
  ara : 2,
  bara : {
    ggg : 3,
    vvv : 6
  }
}
function deepCompare(o1, o2, arr = []) {
  console.log('o1='+o1)
  console.log(typeof o1)
  console.log('o2='+o2)
  console.log(typeof o2)
  if(typeof o1 !== 'object' || o1 === null || o2 === null){
    console.log(o1 === o2)
    return o1 === o2
  }
  
  for(let el in o1){
    if(typeof o1[el] === 'object' && !Array.isArray(o1[el])){
      deepCompare(o1[el], o2[el], arr)
    }else{
      arr.push(o1[el] === o2[el])
    }
  }
  return !arr.includes(false)
};
console.log(deepCompare(null, undefined))
















