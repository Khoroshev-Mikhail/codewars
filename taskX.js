console.log('----------------------------Task:314 "ES5 Generators(i)"----------------------------')
function generator(fn){
    return {
        next: fn(),
    }
}
function fibonacciSeq(){
    let curr = 1;
    let prev = 1;
    return () => {
        let curr2 = curr;
        curr = prev;
        prev += curr2
        return curr2
    }
}
//var seq = generator(fibonacciSeq)
function factorialSeq(){
    let n = -1; //Рефакторинг в данном случае???
    function factorial(n){
        if(n <= 1){
            return 1
        }
        return n * factorial(n - 1)
    }
    return () => {
        n++
        return factorial(n)
    }
}
//var seq = generator(factorialSeq)
function rangeSeq(start, step){
    let currentStep = start - step; //Рефакторинг? Как изменить переменную после её возвращения
    return () => () => {
        currentStep += step;
        return currentStep
    }
}
//var seq = generator(rangeSeq(1, 2))
function partialSumSeq(...args){
    let arr = []
    let i = -1 //Тоже самое
    args.reduce((a, b) => {
        arr.push(a + b)
        return a + b
    }, 0)
    return () => () =>{
        i++
        return arr[i]
    }

}
//var seq = generator(partialSumSeq(1, 3, 7, 2, 0))
function isPrime(num) {
    if(num <= 1 || num % 1 != 0) {
      return false
    }
    for(let i = 2; i < num; i++){
      if(num % i == 0){
        return false
      }
    }
    return true
  }
function primeSeq(){
    let primeNum = 1;
    return () => {
        do{
            primeNum++
        }while(!isPrime(primeNum))
        return primeNum
    }
}
