console.log('----------------------------Task:312 "A Chain adding function"----------------------------')
function add(m){
  console.log(m)
  return (n) =>{ //функция
    return (z) => { //Функция
      return (y) => { //число
        return m + n + z + y
      }
    }
  }
}
console.log(add(1)(2)(3)(4))