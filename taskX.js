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
  if(o1 === null || o2 === null){
    arr.push(o1 === o2)
  }
  if(typeof o1 !== 'object' && typeof o2 !== 'object'){
    arr.push(o1 === o2)
  }
  if(typeof o1 === 'object' && typeof o2 === 'object' && o1 !== null && o2 !== null){
    //Если это массивы
    if(Array.isArray(o1) && Array.isArray(o2)){
      if(o1.length !== o2.length){
        arr.push(false)
      }
      if(o1.length === 0 && o2.length === 0){
        arr.push(true)
      }
    }
    //Если это объекты
    if(!Array.isArray(o1) && !Array.isArray(o2)){
      if(Object.keys(o1).length !== Object.keys(o2).length){
        arr.push(false)
      }
      if(Object.keys(o1).length === 0 && Object.keys(o2).length === 0){
        arr.push(true)
      }
    }
    //Если это массив и объект
    if(!Array.isArray(o1) && Array.isArray(o2)){
      arr.push(false)
    }
    for(let el in o1){
      deepCompare(o1[el], o2[el], arr)
    }
  }
  if(typeof o1 !== 'object' && typeof o2 !== 'object'){
    arr.push(o1 === o2)
  }
  return !arr.includes(false)
};
console.log(deepCompare({}, {}))
console.log(typeof null)
















